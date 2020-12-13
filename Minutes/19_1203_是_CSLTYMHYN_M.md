# Team 10 - 19th Meeting 

<br>

## Information

**Time:**  2020.12.03 10:00-10:30 (30 m)

**Location:** PMB449

**Chairperson:**  Shiliang Chen

**Secretary:**  Yiming Tang & Yani Huang

**Translator:**  Yiming Tang

**Attendence:** /7

| **Members** | **Yiming Tang, Shiliang Chen, <br>Yani Huang, Ruizi Han, <br>Yijie Lu, Yuting Jiang<br/>Dr. Heshan** |
| ----------- | ------------------------------------------------------------ |
| Late        | 0                                                            |
| Absent      | 0                                                            |

<br>

------
<br>

## Agenda

*The whole meeting is expected to take 30 minutes.*

1. Opening（2m）

   Revision of last week

   - Requirements were concluded and waiting for validation

   - Technical research was done by team members

   - First draft of Interim Report was finished

2. Interim report feedback and discussion (18m)

   Yuting is the prime editor, she will introduce the structure and describe some of the issues we met.

   - Requirements reference changed

   - High fidelity prototype

   - Referencing website issue

   - Words count issue
   - Indentation issue

3. Requirement validation (10m)

   - Requirements document comments

   - Use case diagram comments

4. After meeting

   - Next week's arrangement
   - Book a classroom

<br>

## Minute

#### Outcomes

不用移除那个小红框，这是LaTeX的格式

structure good，覆盖了所有的东西吗？应该是

要把handbook给她看。不然她也不知道应该有哪些内容。

marketing research - 把格式重构成这个样子

both

simple, direct

key implement decisions，让他更明显一点 -> 专门针对handbook。不然他会要去【寻找】你哪些内容放在哪里了。

subsection -> Technical issue

time plan -> 先加一点描述，再画图

reference -> 这个不是正确的reference，要加latest accessed time等等。这不是正确格式。

Bibtext category misk



pr 20 square bracket 关掉

名字的细节，

appendix 会议记录放里面

introduction, 第一段，explain what is sorting algorithms，然后给个例子，再解释这玩意的重要性。再延长一些，细节一点，不太了解的人也得看得懂

citation 27，.27 改成 27.

[small thing but important]

aim 在哪？还是要清楚一点、明显一点。

page 5 2.2.1 visualization and animation number is 1, 看起来奇怪。

我觉得她不是很满意

有的lower category甚至不用给数字，page 7 web... 她觉得不用，加粗就行了。

内容 very nice

page 32, requirement specification, explain non & functional first para.

description first para, 不专业。用section number。不用first part

core features,  select a type of sorting algorithm, 不够清晰，别人听不懂啊。ambiguous。

2.b, the sorting algoirthm，clear。

2.a, select a sorting algorithm, 清晰。

sorting animation related feature, order, which sorting algorithm they want to see. how user do this step by step. logical. 

test, 我感觉说的好像是你早就知道这个不对了。

？的category, 放一起？

capability initial thought

only windows non-functional, 她不太同意这个。

delete [only]，我感觉bgl说的和她说的太不一样了。

another teacher. in a reference

3.1 focus group 

every chapter introduction



要做什么事

1. 改标题【变成符合handbook一点的】colin 周2
2. 介绍 hrz 周2


**What is going to be discussed in the next meeting:**



-------


#### Work summary for last stage

| **Task**                                | **Members**                | **Report** | **Question**                                                 | **Completeness** |
| --------------------------------------- | -------------------------- | ---------- | ------------------------------------------------------------ | ---------------- |
|  ||            |              |                  |
|          |             |            |              |                  |
|          |             |            |              |                  |

<br>

#### Tasks for next stage

| **Task**                                                     | **Members**                                           | **DDL**         |
| ------------------------------------------------------------ | ----------------------------------------------------- | --------------- |
|          |             |         |
|          |             |         |
|          |             |         |
|          |             |         |
|          |             |         |
|          |             |         |
|          |             |         |
|          |             |         |

<br>

#### Problems

| Priority(0 for highest, 5 for lowest) | **Problem Description**                         | **Possible consequence**                | **Proposer** | **Tentative Solution**     | **Expected completion time** |
| ------------------------------------- | ----------------------------------------------- | --------------------------------------- | ------------ | -------------------------- | ---------------------------- |
|                                       |                         |                          |              |                        |                              |


<br>

-------

<br>

## Comments

#include "stdio.h"
#include "coursework.h"
#include "linkedlist.h"
#include <stdlib.h>



void initialise(struct element **head, struct element **tail)
{

    for (size_t i = 0; i < NUMBER_OF_PROCESSES; i++)
    {
        addLast(generateProcess(), head, tail);
        
    }
    
}



void list_free(struct element **start, struct element **end)
{
   struct element *cur = *start;
   while(cur != NULL)
   {
      struct element *temp = cur->pNext;
      free(cur);
      cur = temp;
   }
   *start = NULL;
   *end = NULL;
}

int main(int argc, char const *argv[])
{
    struct element *head = NULL;
    struct element *tail = NULL;
    struct element *curPtr = NULL;
    struct process *current = NULL;
    
    // initialise(&head, &tail);

    struct element *heads[MAX_PRIORITY+1];
    struct element *tails[MAX_PRIORITY+1];
    for (size_t i = 0; i < MAX_PRIORITY+1; i++)
    {
        heads[i] = NULL;
    }
    
    struct process *sortArray[NUMBER_OF_PROCESSES];
    for (size_t i = 0; i < NUMBER_OF_PROCESSES; i++)
    {
        struct process *process = generateProcess();
        sortArray[i] = process;
    }


    for (size_t i = 0; i < NUMBER_OF_PROCESSES; i++)
    {
        struct process *process = sortArray[i];
        int priority = process->iPriority;
        addLast(process, &heads[priority], &tails[priority]);
        struct process *cur = (struct process *)heads[priority]->pData;
        
    }

    curPtr = head;
    double currentResponseTime = 0;
    double currentTurnaroundTime = 0;
    double totalResponseTime = 0;
    double totalTurnaroundTime = 0;
    double temp = 0;
    
    printf("%s\n", "PROCESS LIST");

    for (size_t i = 0; i < MAX_PRIORITY + 1; i++)
    {
        struct element *cur = heads[i];
        if (cur != NULL)
        {
            printf("Priority %d\n", i);
            while (cur != NULL)
            {
                struct process *pro = (struct process *)cur->pData;
                printf("	 Process Id = %d, Priority = %d, Initial Burst Time = %d, Remaining Burst Time = %d\n", pro->iProcessId, pro->iPriority, pro->iInitialBurstTime, pro->iRemainingBurstTime);
                cur = cur->pNext;
            }
        }
    }
    printf("%s\n\n", "END");

    int flag = 0;
    for (size_t i = 0; i < MAX_PRIORITY+1; i++)
    {
        struct timeval startTime;
        struct timeval endTime;
        struct element *cur = heads[i];

        while (cur != NULL)
        {
            struct process *pro = (struct process *)cur->pData;

            if (pro->iRemainingBurstTime > 0)
            {
                flag = (pro->iInitialBurstTime == pro->iRemainingBurstTime);
                runPreemptiveJob(pro, &startTime, &endTime);
                if (flag)
                {
                    currentResponseTime = temp;
                    totalResponseTime += temp;
                    printf("Process Id = %d, Priority = %d, Previous Burst Time = %d, Remaining Burst Time = %d, Response Time = %d\n", pro->iProcessId, pro->iPriority, pro->iPreviousBurstTime, pro->iRemainingBurstTime, currentResponseTime);
                }
                
                temp = temp + pro->iPreviousBurstTime - pro->iRemainingBurstTime;
            }

            printf("Process Id = %d, Priority = %d, Previous Burst Time = %d, Remaining Burst Time = %d\n", pro->iProcessId, pro->iPriority, pro->iPreviousBurstTime, pro->iRemainingBurstTime);

            if (pro->iRemainingBurstTime == 0 && cur == heads[i])
            {
                currentTurnaroundTime = temp;
                totalTurnaroundTime += temp;
                removeFirst(&heads[i], &tails[i]);
                cur = heads[i];
                // printf("%6d %9d %11d %17s %21.0f\n", pro->iProcessId, pro->iPriority, pro->iInitialBurstTime, "/", currentTurnaroundTime);
                printf("Process Id = %d, Priority = %d, Previous Burst Time = %d, Remaining Burst Time = %d, Turnaround Time = %d\n", pro->iProcessId, pro->iPriority, pro->iPreviousBurstTime, pro->iRemainingBurstTime, currentTurnaroundTime);
            }

            if (cur != NULL && cur->pNext != NULL)
            {
                cur = cur->pNext;
            }
            else if (cur == NULL)
            {
                break;
            }
            else if (cur->pNext == NULL)
            {
                cur = heads[i];
            }

        }
    }
    
    printf("Average response time is: %.1f\n", totalResponseTime/10);
    printf("Average turnaround time is: %.1f\n", totalTurnaroundTime/10);

    return 0;
}

