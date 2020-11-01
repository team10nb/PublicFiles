# PublicFiles
本仓库用于存储源代码和各类文档，发布规范参考信息，方便协作。

2020.11.1更新

## 重要事项

近期Deadline: **12.10** Interim Report

近期重点任务:

1. Literature review
2. 准备survey & interview
3. 分配更多development角色
4. 时间线规划以及gantt图重新设计

## 邮箱

方便抄送用

Dr. Heshan Heshan.Du@nottingham.edu.cn

Ruizi Han biyrh2@nottingham.edu.cn

Shiliang Chen scysc1@nottingham.edu.cn

Yani Huang scyyh7@nottingham.edu.cn

Yijie Lu scyyl9@nottingham.edu.cn

Yiming Tang scyyt1@nottingham.edu.cn

Yuting Jiang scyyj2@nottingham.edu.cn

如何发送邮件可以再制定。暂定：收件人 Dr. Heshan，抄送所有其他人。

## Division of labour

- Team Leader: Shiliang Chen

- UI Designer: Yiming Tang, Yani Huang

- Technical Leader: Shiliang Chen

- Quality Assurance Leader: Yijie Lu, Yuting Jiang

- Report Editor: Yani Huang, Yuting Jiang ,Ruizi Han

- Repository Master: Ruizi Han, Yiming Tang

- Monitor (Tester): Yani Huang, Shiliang Chen

## 语言规范

中文(CN)：规范使用中国大陆官方简体中文

英文(GB)：规范使用英国英文




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



## [Documents](/Documents/)

本文件夹存放未分类的实用文件或暂时无法分类的文件。存放的文件请在此处大致表明原用途。

- [Agenda_and_Minutes_templates](/Documents/Agenda_and_Minutes_templates/)：Dr. Heshan 给的相关模版
- [AE2GRP_Group05_GroupReport.pdf](/Documents/AE2GRP_Group05_GroupReport.pdf)：Dr. Heshan 给的1617相关项目的report
- [AE2GRP_Group05](/Documents/AE2GRP_Group05/)：Dr. Heshan 给的1617相关项目



## [Others](/Others/)

本文件夹存放已无用但仍暂时保留的文件。存放的文件请在此处大致表明原用途。

- [Project_16](/Others/Project_16/)：搜索到的以前其他组做过的P16的源代码。



## Src

本文件夹存放源代码。格式之后再讨论。



## 项目时间线

9/30

第一次informal meeting， 开始分配工作，互相了解小组成员，选择项目写bid

10/4

第二次informal meeting，澄清bid相关事宜，优化，初版分享

10/6

第三次informal meeting，bid审核，cv审核，准备提交

10/8

中标20，准备相关工作，开始项目

10/10

第四次informal meeting，准备第一次formal meeting相关问题

10/15

第一次formal meeting，介绍小组成员，初步讨论项目规划以及需求

10/20

第五次informal meeting，谈论了有关网站，ethics，requirements的事项，确认了目标人群，确定了问卷和访谈的市场调研方法

10/21

完成初版ethics form，初版survey，初版consent form

10/22

第二次formal meeting，询问了有关correctness的问题，澄清了有关requirement的要求，审批了初版survey，确定了ethics form

10/23

发送了ethics form的邮件

10/24

周报: 1.近阶段大家可以开始学习起来latex 2.礼拜二开会前大家想一下correctness的实现方案礼拜四要汇报确认的 3.搜集或者制作我们app有可能的不同风格界面用在问卷给user选 4.想一想采访老师的问题

10/27

第六次informal meeting, 讨论了关于survey的细节和correctness的两种实现方案，准备写成文档在下次meeting的时候向heshan确认。确认了website的内容，已上线。想了几个功能，打算survey中向用户确认。有了interview的基本问题，需要明天向dave确认上交问题和问卷以什么形式附上。

10/28

第三次formal meeting，确认了网站，确认了survey，确认了interview 的几个问题，确认了correctness一步步来，确认了requirement根据ppt写
下阶段literature review以及准备期中报告，继续准备问卷和采访，注意要对我们产品有所帮助
