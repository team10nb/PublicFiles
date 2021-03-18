# Final Report （在原有的基础上新的变化）

- 要加的：Test正文，Test附录
- 要大修改的： Implementation正文：因为handbook里提到“  In particular, the report must not assume that the reader has read the Interim Group Report prior to
reading the final report.” 所以我认为关于之前方案的弃用我们不需要提及，对语言的选择我们只要解释我们为什么要使用react就行

## Point one
### 原句：Updated design of the system and its user interface.(系统及其用户界面的更新设计)

**Report要呈现的**
- Updated design of the system and its user interface:图文展示的界面介绍。User Interface Design(组件名称、使用原因、组件效果)



## Point Two
### 原句：Discussion on the implementation and testing of the system. This must include a list of all major system components, which of these were written by the group and where the others come from, and an overview of the developed source code hierarchy(讨论系统的实施和测试。这必须包括所有主要系统组件的列表，其中哪些是编写的以及其他人的来源，以及开发的源代码层次结构)

**Report要呈现的**
- Discussion on the implementation:  Platform、language、build tool这几点依然要提及。同时新加功能实现决策。这一点算是对之前  “Updated design of the system and its user interface” 的扩展。依然是图文介绍，只不过这次的图是代码快照。可以着重我们对动画的实现，如：swap的实现原理，视频的进度条的实现原理
- Discussion on the testing：TDD介绍、Test result 表
- an overview of the developed source code hierarchy:
这个需要完善我们的design结构表，最后要说明我们是怎么设计这个结构的

## Point Three
### 原句：Summary of what was achieved, referring to the stated requirements.(所取得成就的总结，参考所述要求。)

**Report要呈现的**
- Summary of what was achieved, referring to the stated requirements: 之前组的report没具体体现，个人认为要涉及到软件功能的实现，对比之前我们interim report的design，描述是否有变动，变动原因，最后效果的总结

## Point Four
### 原句：Reflective comments on the success of the project, both from a technical and a project management perspective, including group working issues etc.(从技术角度对项目的成功进行反思以及项目管理的观点，包括小组工作问题等。)

**Report要呈现的**
- comments on the success of the project: 结合我们之前写的risk solution 记录我们工作中碰到的问题和解决方法，具体应该结合每次meeting的总结

## Point Five
### 原句：An appendix giving a description of how the developed system was tested (test cases, example outcomes, etc.)(描述如何测试开发系统的附录（测试用例、示例结果等）)

**Report要呈现的**
- test附录

## 总结
**平时写jsx代码要做的事**

- 每写一个组件，首先要有developer的名字（如果是第三方，要有resource）。
- 接着，要有对这个组件的介绍，包括：组件的功能、为什么需要这个组件、如何使用（渲染后它是怎么工作的）
- 最后，需要单独列一条为了之后写report方便的提示：如果它是组成某一个大组件的小组件，注明它将用于哪个大组件。反之，如果它是一个大组件，注明由哪几个小组件组成它。如：bubble sort交互组件：bar，inputbar，animation。。。


**平时写test.jsx代码要做的事**

- 参考睿孜的testlog

**平时写agenda要做的事**
- chairperson要有对上周工作的总结和反思，如： Task overdue：我们组员通过调节时间解决了问题。一句话就行（英文），之后用在Point Four里。



礼拜三的时候叫tym再发一下

完善工作
需求分析的修改
补充对于先存软件的分析
correctness proto 
technical research
20页加入react
2.4.4 缺少了vsc
chapter 3 根据现在的情况修改 需要记录改动吗
在第一次formal之前总结已经做的和难以完成的
如果要改动的话 usecase 什么的也要变
所取得成就的总结,对比需求, 可能是新模块

后端要改, build tool, ide要改

新的proto 统一风格

创新点: 解释框

选取了最适合的语言库和框架

risk management  看情况修改和补充 对应point 4

time plan补充进去

testing 部分的介绍补充 tdd ci

Frontpage 70分

Point1 design

point2 implementation

- A user-manual (if appropriate) should be included as an appendix.

为什么成功的关键: 优先级制度
26次英文版
29次m版

1.requirement重修(一人）
功能删减
语法检查
userstory。。。图修改(之前的人）
2，prototype绘制(一人）
包括：之前interim report，correctness， tutorial
explanation
语法检查
3.Test新版块书写(两人）
TDD，CI介绍
语法检查
把大家目前的test整理到一张表格里，之后也负责这个工作
4.Implementation新板块书写(两人)
用户界面的介绍(已有界面)
procedure, correctness

3.14

1. 4 Design
1) 4.1 Use Case Diagram 4.2 Sequence Diagram Yini DDL: 3.16前上传图片版 Yijie 改注释 DDL: 3. 19 19:00前 
2) 4.4 新板块的书写  
  上次布置任务继续写 DDL: 3. 19 19:00前 
  Implementation graphical user interface-animation ruizi，shiliang
  Implementation graphical user interface-local storage yuting 
  Implementation graphical user interface-router yijie 
  Implementation graphical user interface-sort yiming yani

2. 5 Implementation
1) 5.1 Key Implementation Decisions: 
    - 5.1.2 Programming Language and Software Framework
    删除back-end
    - 5.1.3 Build Tool，5.1.5 Integrated Development Environment
    因为都是java的内容，要改成react和js
2) 5.2 High-Fidelity Prototype: Yiming Tang DDL: 3. 19 19:00前 
3) 5.3 新板块书写(两人)
procedure: Yuting DDL: 3. 19 19:00前 
tutorial: 三个页面由author分别写，shiliang：swap，ruizi：loop，yani：terminology DDL: 根据页面的完成情况自行调整
mainPage: Yijie DDL: 3. 19 19:00前 

3. Grammar 校对
yiming DDL: 3. 19 19:00前
根据hesan给的feedback，修改原先的语法问题，不用改的部分：
3 全部
4 4.1，4.2
5 5.1.2，5.1.3，5.1.5  

4. Requirement

| **Task**                                              | **Members**                 | **DDL** |
| ----------------------------------------------------- | --------------------------- | ------- |
| Key Implementation Decisions                          | Ruizi Han                   |/        | 
| loop User Interface                                   | Ruizi Han                   |/        | 
| swap User Interface                                   | Shiliang Chen               |/        |
| Implementation graphical user interface-animation     | Ruizi Han, Shiliang Chen    |3.19     |
| Implementation graphical user interface-local storage | Yuting Jiang                |3.19     |
| Procedure User Interface                              | Yuting Jiang                |3.19     | 
| Implementation graphical user interface-router        | Yijie LU                    |3.19     |
| DML explanation                                       | Yijie Lu                    |3.19     |
| MainPage User Interface                               | Yijie Lu                    |3.19     | 
| terminology User Interface                            | Yani Huang                  |/        | 
| UML packege                                           | Yani Huang                  |3.19     |
| Gramar Check                                          | Yiming Tang                 |3.19     |
| Prototype                                             | Yiming Tang                 |3.19     |
| Implementation graphical user interface-sort          | Yiming Tang，Yani Huang     |3.19     |