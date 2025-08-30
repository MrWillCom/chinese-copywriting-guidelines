# 中文文案排版指北（a26e2ce6+）

统一中文文案、排版的相关用法，降低团队成员之间的沟通成本，增强网站气质。

## “a26e2ce6+”

本项目是 [sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines) 的衍生版本。因为这一衍生版本是从提交 `a26e2ce6` 开始分叉的，所以命名为“a26e2ce6+”。

这一衍生版本移除了除简体中文外的语言版本，旨在方便个人维护。此外，还移除了“工具”、“谁在这样做？”和“Forks”章节，以免由于内容更新而产生潜在的误导。用于静态网页部署或持续集成、部署的文件亦已被移除。

这一衍生版本不会释出版本，若需要指代版本，请使用 Git 提交哈希值。

| 标记   | 用法           |
| ---- | ------------ |
| 正确   | 请这样做         |
| 可以接受 | 这样做问题不大      |
| 不推荐  | 没有必要的话，不要这样做 |
| 错误   | 禁止这样做        |

## 空格

> 「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。
>
> 与大家共勉之。」——[vinta/paranoid-auto-spacing](https://github.com/vinta/pangu.js)

### 中英文之间需要增加空格

正确：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。

错误：

> 在LeanCloud上，数据存储是围绕`AVObject`进行的。
>
> 在 LeanCloud上，数据存储是围绕`AVObject` 进行的。

完整的正确用法：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。每个 `AVObject` 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 `AVObject` 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

### 中文与数字之间需要增加空格

正确：

> 今天出去买菜花了 5000 元。

错误：

> 今天出去买菜花了 5000元。
>
> 今天出去买菜花了5000元。

### 数字与单位之间需要增加空格

正确：

> 我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB

错误：

> 我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB

例外：度数／百分比与数字之间不需要增加空格：

正确：

> 角度为 90° 的角，就是直角。
>
> 新 MacBook Pro 有 15% 的 CPU 性能提升。

错误：

> 角度为 90 ° 的角，就是直角。
>
> 新 MacBook Pro 有 15 % 的 CPU 性能提升。

### 全角标点与其他字符之间不加空格

正确：

> 刚刚买了一部 iPhone，好开心！

错误：

> 刚刚买了一部 iPhone ，好开心！
>
> 刚刚买了一部 iPhone， 好开心！

### 用 `text-spacing` 来挽救？

CSS Text Module Level 4 的 [`text-spacing`](https://www.w3.org/TR/css-text-4/#text-spacing-property) 和 Microsoft 的 [`-ms-text-autospace`](https://msdn.microsoft.com/library/ms531164(v=vs.85).aspx) 可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 macOS、iOS、Windows 等用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。

## 标点符号

### 谨慎重复使用标点符号

如果没有必要，则不重复使用标点符号；如果有必要，也不应该重复过多次数。

正确：

> 德国队竟然战胜了巴西队！
>
> 她竟然对你说「喵」？！

可以接受：

> 德国队竟然战胜了巴西队！！！
>
> 她竟然对你说「喵」？？！！

不推荐：

> 德国队竟然战胜了巴西队！！！！！！！！
>
> 她竟然对你说「喵」？！？！？？！！

## 全角和半角

不明白什么是全角（全形）与半角（半形）符号？请查看维基百科条目『[全角和半角](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)』。

### 语境原则

决定使用全角还是半角符号的因素，是所处的语境。在中文语境中，应使用全角符号、中文标点；在英文语境中，应使用半角符号、英文标点。

有时，中文语境中可能包含英文语境，反之亦然，但仍应用相应的标点符号区分清楚。例如：

> 核磁共振成像（NMRI）是什么原理都不知道？

“核磁共振成像（”和“）是什么原理都不知道？”处于中文语境，而“NMRI”处于英文语境。

> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常有趣。

“推荐你阅读《”和“》，非常有趣。”处于中文语境，而“Hackers & Painters: Big Ideas from the Computer Age”处于英文语境。

### 使用全角中文标点

正确：

> 嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！
>
> 核磁共振成像（NMRI）是什么原理都不知道？JFGI！

错误：

> 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎！
>
> 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎！
>
> 核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!
>
> 核磁共振成像(NMRI)是什么原理都不知道?JFGI!

### 在中文句子中使用中文书名号

中文句子内夹有英文书籍名、报刊名时，仍应使用中文书名号，而非英文斜体，这是基于[语境原则](#语境原则)的。

正确：

> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常有趣。

错误：

> 推荐你阅读 *Hackers & Painters: Big Ideas from the Computer Age*，非常有趣。

### 数字使用半角字符

正确：

> 这个蛋糕只卖 1000 元。

错误：

> 这个蛋糕只卖 １０００ 元。

如果确实有对齐数字的必要，则应使用等宽字体。

### 遇到完整的英文整句、特殊名词，其内容使用半角标点

正确：

> 乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
>
> 推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常地有趣。

错误：

> 乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
>
> 推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

## 名词

### 专有名词使用正确的大小写

大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用法进行简述。

正确：

> 使用 GitHub 登录
>
> 我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

错误：

> 使用 github 登录
>
> 使用 GITHUB 登录
>
> 使用 Github 登录
>
> 使用 gitHub 登录
>
> 使用 gｲんĤЦ8 登录
>
> 我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。
>
> 我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。
>
> 我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。
>
> 我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。
>
> 我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。

注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标淮的大小写规范进行书写；并通过 `text-transform: uppercase;`／`text-transform: lowercase;` 对表现形式进行定义。

### 不要使用不地道的缩写

正确：

> 我们需要一位熟悉 TypeScript、HTML5，至少理解一种框架（如 React、Next.js）的前端开发者。

可以接受：

> 我们需要一位熟悉 TS、H5，至少理解一种框架（如 React、Next.js）的前端开发者。

错误：

> 我们需要一位熟悉 Ts、h5，至少理解一种框架（如 RJS、nextjs）的 FED。

## 链接

### 链接与其它文本之间不加空格

正确：

> 请[提交一个 issue](#) 并分配给相关同事。
>
> 访问我们网站的最新动态，请[点击这里](#)进行订阅！

错误：

> 请 [提交一个 issue](#) 并分配给相关同事。
>
> 访问我们网站的最新动态，请 [点击这里](#) 进行订阅！

## 引号

### 简体中文不使用直角引号

正确：

> “老师，‘有条不紊’的‘紊’是什么意思？”

不推荐：

> 「老师，『有条不紊』的『紊』是什么意思？」

## 用词

### “其他”、“其她”、“其它”

根据指代内容，选择相应正确的“其他”、“其她”、“其它”。

正确：

> 除了 iPhone，Apple 还有很多其它产品。

错误：

> 除了 iPhone，Apple 还有很多其他产品。
>
> 除了 iPhone，Apple 还有很多其她产品。

### 不要翻译没有中文译名的名字

正确：

> 我们明天去 Apple Store 买 MacBook 吧！

错误：

> 我们明天去苹果店买苹果笔记本吧！
>
> 我们明天去 Apple 店买迈克本吧！

## 参考文献

- [Guidelines for Using Capital Letters - ThoughtCo.](https://www.thoughtco.com/guidelines-for-using-capital-letters-1691724)
- [Letter case - Wikipedia](https://en.wikipedia.org/wiki/Letter_case)
- [Punctuation - Oxford Dictionaries](https://en.oxforddictionaries.com/grammar/punctuation)
- [Punctuation - The Purdue OWL](https://owl.english.purdue.edu/owl/section/1/6/)
- [How to Use English Punctuation Correctly - wikiHow](https://www.wikihow.com/Use-English-Punctuation-Correctly)
- [格式 - openSUSE](https://zh.opensuse.org/index.php?title=Help:%E6%A0%BC%E5%BC%8F)
- [全形和半形 - 维基百科](https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)
- [引号 - 维基百科](https://zh.wikipedia.org/wiki/%E5%BC%95%E8%99%9F)
- [疑问惊叹号 - 维基百科](https://zh.wikipedia.org/wiki/%E7%96%91%E5%95%8F%E9%A9%9A%E5%98%86%E8%99%9F)
