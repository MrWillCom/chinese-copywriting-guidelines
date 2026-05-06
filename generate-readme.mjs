import { readFileSync, writeFileSync } from 'fs'
import guidelines from './guidelines.json' with { type: 'json' }

let md = ''

md += `# ${guidelines.title}\n\n`
md += `${guidelines.intro}\n\n`

md += `## “a26e2ce6+”\n\n`
md += `${guidelines.note}\n\n`

md += `| 标记 | 用法 |\n`
md += `| --- | --- |\n`
for (const mark of Object.values(guidelines.marks)) {
  md += `| ${mark.label} | ${mark.meaning} |\n`
}
md += '\n'

function renderBlock(block) {
  switch (block.type) {
    case 'paragraph':
      return `${block.text}\n\n`

    case 'quote': {
      let lines = block.text.split('\n')
      if (block.source && block.url) {
        lines[lines.length - 1] += `——[${block.source}](${block.url})`
      }
      return (
        lines
          .map(l => {
            if (l === '>') return '>'
            if (l.startsWith('> ')) return l
            return `> ${l}`
          })
          .join('\n') + '\n\n'
      )
    }

    case 'examples': {
      const label = guidelines.marks[block.mark].label
      let result = `${label}：\n\n`
      if (block.items.length === 1) {
        result += `> ${block.items[0]}\n\n`
      } else {
        result += block.items.map(item => `> ${item}`).join('\n>\n') + '\n\n'
      }
      return result
    }

    case 'fullExample':
      return `完整的正确用法：\n\n> ${block.text}\n\n`

    case 'exception':
      return `例外：${block.text}\n\n`

    default:
      return ''
  }
}

for (const section of guidelines.sections) {
  md += `## ${section.title}\n\n`

  if (section.content) {
    for (const block of section.content) {
      md += renderBlock(block)
    }
  }

  if (section.subsections) {
    for (const sub of section.subsections) {
      md += `### ${sub.title}\n\n`
      for (const block of sub.content) {
        md += renderBlock(block)
      }
    }
  }
}

md += `## 参考文献\n\n`
for (const ref of guidelines.references) {
  md += `- [${ref.title} - ${ref.source}](${ref.url})\n`
}

writeFileSync('README.md', md)
console.log(md)
