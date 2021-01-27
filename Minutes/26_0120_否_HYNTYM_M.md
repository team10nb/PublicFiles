# Team 10 - Nth Meeting 

<br>

## Information

**Time:**  2021.1.20 (50 min)

**Location:** 

**Chairperson:**  Yani Huang

**Secretary:**  Yiming

**Translator:** 

**Attendance:**  6/6

| **Members** | **Yiming Tang, Shiliang Chen, <br>Yani Huang, Ruizi Han, <br>Yijie Lu，Yuting Jiang |
| ----------- | ------------------------------------------------------------ |
| Late        | /                                                            |
| Absent      |                                                              |

<br>

------
<br>

## Agenda

因为前两周大家都掌握了react和jest的基础知识，所以这周开始结合项目的实践：



1. 诗量回顾上次开会内容，大家交流一下jest的学习心得和疑惑（15min）

2. 分组制作组件（15min）：

   1.  InputBar/ （需要正则表达式检测input格式）：要求只能输入legal input（数字）**这就是个文本框 按了个按钮之后可以生成一个bar**
   2.  （和1算成一个）Bar/ （代表数字的柱状图）：要求可以根据input的数字显示对应的长度**现在是单独一个，先不管排序什么的**
   3.  ProgressLine/（学习进度线，形状，长度，颜色）：可以自由在形式上化简，能表达出意思就可以（开会会解释）**我没理解，他们理解就行了**
   4.  （不做了）Button/（有多种作用的按钮, 可能有多种样式的button）：自由命题，可以做点击button跳出弹窗之类的，样式自由发挥！**要提供一个函数，传入一个函数A，输出一个【按下这个按钮之后会实现函数A的按钮】**
   5.  Module/ （包括 imageContainer，ProgressLine，点击可以跳转）：![28681611145045_.pic](/Users/yiming/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e868056832d3a1b4f9e3240872aa7e00/Message/MessageTemp/bf6beec297c45bcfadee956d640c523c/Image/28681611145045_.pic.jpg)
   6.  （难，但是我觉得直接给我吧） Player/（控制模块,包括了进度条,播放等控制用组件）：随便播放一个MP4文件也可以，预期是做出功能健全的进度条
       1.  **mp4应该不行，我们这个东西要播的不是视频（0:00/12:34），而是步骤（0/100）。我们应该搞清楚一些东西，比如那个排序的过程该怎么存，再做这个。要强调一下每个组件的正确的输入和输出是什么。让我写写**
       2.  看我能做的出不

   

   sl yt 35

   rz yj 12

   wo yn 6



以冒泡举例

一个类叫State（冒泡算法，别的算法可能会要更复杂），他里面包含Action（每一步发生什么），做完这一步之后的列表是什么。

一个类叫Action，有一堆子类，代表每一步干了些什么

有一个列表叫做sortList，里面的内容是每一步的状态和每一步（已经被bubbleSort函数算出来了），我现在想的是双向链表

有一个函数叫bubbleSort(input)，输入一个整数列表input，输出一个stateList，

```
State
-------------
+action: Action
+highlightedRed: (int)
+highlightedGreen: (int)
+list: list(int)
-------------
-------------

Action
-------------
分子类吧


```



然后这个Player应该有几个部分

1. 进度条：知道stateList的长度，现在显示的是第几个
2. 



1. 制作界面（15min）：

   	1. 制作尽可能和prototype靠近的界面，最好带有一些简单的交互（如，按‘？’键会弹出使用指南页面）





​         [0, 1, 7, 5]

⬅️          ⏸️        ➡️

分组：

暂时分为两组，各三人：

陈诗量，韩睿孜，唐懿明

黄雅妮，卢艺婕，姜宇婷



做完全相同的事情，只是分成两个组。目的是每个人都要练习到。

## Minute

上周：做了井字棋的剩下的功能，了解了react，学了一些test。讨论了设计细节和结构。



```
snapshot 是很有用的函数，可以模拟函数出来的结果方便看，形成一个文件。看test是否正确test了，可以参照这个文件
spy 是很有用的函数，打出list要先按按钮才能出来，还在研究这里
照着教程在写，但是没有成功，在跟着教程的例子写，还没有思考井字棋的部分。

测试：
1 渲染出来怎么样（表面的表现）getbytext shallow 用.contain
2 功能实现（内部实现）组件一方面自己是整体，一方面里面又会包含别的模组，如果在测试的模组包含了别的模组，那一般要测试他有没有被call到, tobecalledwith, tohavebeencalled, tobecalledtimes，比如有square和board，根据资料，不用render一个container里了，一般render第二个参数是不要的
```



方案1：3个人的小组，每个组自己做【重复】的

（被使用）方案2：2个人做2个组件，讨论、多设计

-------


#### Work summary for last stage

| **Task** | **Members** | **Report** | **Question** | **Completeness** |
| -------- | ----------- | ---------- | ------------ | ---------------- |
|          |             |            |              |                  |

<br>

#### Tasks for next stage

| **Task** | **Members** | **DDL** |
| -------- | ----------- | ------- |
|          |             |         |
|          |             |         |
|          |             |         |

<br>

#### Problems

| Priority(0 for highest, 5 for lowest) | **Problem Description** | **Possible consequence** | **Proposer** | **Tentative Solution** | **Expected completion time** |
| ------------------------------------- | ----------------------- | ------------------------ | ------------ | ---------------------- | ---------------------------- |
| /                                     | /                       | /                        | /            | /                      | /                            |

<br>

-------

<br>

## Comments

The meeting proceeded smoothly and was completed within the expected time.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++