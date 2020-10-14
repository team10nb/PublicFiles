# PublicFiles
本仓库用于存储源代码和各类文档，发布规范参考信息，方便协作。

2020.10.14更新

## 语言规范

中文(CN)：请大家规范使用中国大陆官方简体中文

英文(GB): 请大家规范使用英国英文




## Commit 规范

`<type>(<scope>): <subject>`

其中type以及subject为必须要的部分，请注意冒号后的空格，实际使用时不需要"<>", 例如：

`docs(README): fix grammar`

`fix(Main): fix function call`

#### type

用于说明commit的类别，有以下七种

- feat: 新功能，代指feature

- fix: 修补问题bug

- docs: 文档类，如更新readme，模板，会议记录等

- style: 仅改变格式，没有其他影响

- refactor: 重构，不新增，也并非是修改bug

- test: 增加测试

- chore: 构建过程或辅助工具的变动

#### scope（可以省略）

用于说明 commit 影响的范围（暂未清晰）

- 可以是Java 某个类等

#### subject

简单描述具体做了什么

- 动词开头，第一人称单数一般现在时，如add，change
- 首字母小写
- 不加句号

  

## 注释规范

注释规范分为文档注释，测试注释。因为暂未选定语言，因此注释规范暂定



## 代码规范

由于暂未选定语言，因此代码规范暂定



## Change log规范

change log包括三个部分，对应了commit的内容，在每次新版本发布时需要

- New features
- Bug fixes
- Breaking changes



## [会议记录](/Minutes/)

本文件夹存放会议记录文件，以 .md 文件保存。

Markdown 格式简洁美观，导出 PDF 容易，方便记录。

### 文件名规范

#### 模版 ([Template](/Template/))

模版单独放在Template文件夹中，因为以后可能需要修改。

中文模板：`模板_最后修改人缩写_时间_版本.md`

如：`模板_TYM_1014_v1.md`

英文模板：`Template_name_time_version.md`

如：`Template_TYM_0930_v1.md`

在使用时，取版本号最新的模版。

#### 会议记录

中文： `次数_时间_是否正式_主持人缩写记录人缩写_版本.md`

如：`3_0930_否_CSLHRZ_Final.md`, 

英文： `No._Time_WhetherFormal_names_Version.md`

如： `5_1014_T_TYMJYT_Final.md`

- 是否正式：是否有 Supervisor 参与。是的话填T/是，否的话填F/否。
- 版本：由于会议记录有三个流程（Chairperson 写 Agenda (A)、Sec 写Minutes (M)、Chairperson 写 Comments），请将每个上传到本仓库的会议记录标记版本（A (Agenda)、M (Minutes)、Final），方便之后整理。A和M非必须上传，Final版本必须上传。
- 语言：CN（中文）和GB（英文）。



##  [竞标文件](/Bid/Final/)

已完成



## [Others](/Others/)

本文件夹存放已无用但仍暂时保留的文件。存放的文件请在此处大致表明原用途。

- [Project_16](/Others/Project_16/)：搜索到的以前其他组做过的P16的源代码。



## Src

本文件夹存放源代码。格式之后再讨论。

