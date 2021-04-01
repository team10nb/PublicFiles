# Acceptance Testing

Acceptance testing is the test after release testing and is done with the clients. It aims to check whether the software meets stakeholders’ expectations and receive feedbacks from them \cite{reqVSspe}. Team 10 prepared checklist using similar strategy as release testing’s and invited 6 stakeholders from year 2 and year 4 and Dr Heshan to do the acceptance testing. Team 10 showed the software to them and asked them to try the software freely. After trying the software, we discussed the problems with stakeholders and took notes of their comments and feedbacks.

## Feedback from Stakeholders

During the acceptance test on 27th March, the stakeholders gave Team 10 valuable suggestions. Some of them are listed as follows.

1. In the Procedure module, most stakeholders think animation speed is too fast for stakeholders to understand, while some experienced stakeholders believe it is slow.
2. In the Implementation part of the Procedure module, some stakeholders find the quick guides (PDF files) helpful and would love to take a detailed look at them, while one user thinks it is unnecessary and complicated.
3. In the Correctness part, some stakeholders feel confused about what the software is doing. Most stakeholders with no algorithm correctness experience can not understand, especially the relationship among assertion, termination and correctness.
4. A user would like to use the keyboard to control the software. For example, press Enter to go to the next page or press Esc to close the pop-up window.
5. Most stakeholders do not prefer long sentences and paragraphs.
6. Most stakeholders would like more guides on how to use the software.
7. One thinks the user interface is plain and not so colourful.

In the survey after acceptance testing (see appendix), the results (see appendix) seem to be satisfying. Here take some representative data to illustrate.

No stakeholder finds the software very difficult to use, but one says he/she may require a user guide. For the modules' user experience, the Tutorial and Procedure modules are rated 4.5 out of 5, while the Correctness module is only rated 3.8. Team 10 analyses the reason for this to be, most of the stakeholders have no experience in algorithm correctness. So Team 10 have to make it much clearer and emphasise the definitions and relationships of the professional terms.

Team 10 agrees on most of the suggestions and made improvement based on them. 

## Improvement

1. **First In page:** Extra information in explaining our software's purpose is added.
2. **Tutorial Swap:** The Swap page's introduction has been modified. Now it is clearly instructed to press the play button to learn swap.
3. **Procedure Operation:** Pressing Enter to input an array is now realizable. Now users can use both comma and white space to split two numbers when inputting.
4. **Procedure Implementation:** An "in increasing order" option is added to clarify the sorting order.
5. **Procedure Implementation:** Merge and Heap's pseudocode comments are added, informing users of checking the detail of merge and maxHeapify in quick guides.
6. **Animation:** The speed of animation is carefully adjusted to satisfy inexperienced users.
7. **Correctness Termination:** The animation for the terminating example is now changed. Now the two algorithms are both swap algorithms.
8. **More pop-up windows:** More pop-up windows are added in the First In page to inform the users how to utilize modules.
9. **Correctness Proof:** Extra information about the link between proof and assertions are added. It now stresses that this is an aid tool that is not theoretical enough.
10. **Selection sort:** One non-clear assertion is rewritten.
11. **Quicksort:** Quicksort is now presented recursively, being made consistent with merge and heap.

