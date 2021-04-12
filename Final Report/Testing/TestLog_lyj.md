#Test Log

##Abstract
Test log is an important basis for test process monitoring, test results and software quality evaluation. This document records the results and debugging of the tester in the process of testing the component

## Component Testing  
###1.   AlgorithmButton
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|--------|----|---------|--------------|------------------|----------------|
|1       | 2.22 | Fail  | All          | No code has been constructed|
|2       | 2.22 | Pass  | /            | /                |
###2.	AnimationControl
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.30 | Fail | All | No code has been constructed |
|2 | 1.30 | Pass |/|Initial version is created|
|3 | 2.3 | Fail |should match snapshot|Styles changed|
|4 | 2.3 | Pass | /                     |snapshot updated|
###3.   AnimationSlider
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.29 | Fail | All | No code has been constructed |
|2 | 1.29 | Pass |/|Initial version is created|
|3 | 2.5 | Fail |should match snapshot|Styles changed|
|4 | 2.5 | Pass | /                     |snapshot updated|
###4.   AnimationWithCode
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.12 | Pass | All | Test meets the plan |
###5.   CorrectnessHelp
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 3.9 | Pass | All | Test meets the plan |
|2 | 3.10 | Fail | Snapshot | Style changed |
|3 | 3.10 | Pass | Snapshot | snapshot updated |
|4 | 3.13 | Fail | Snapshot | reset button style changed |
|5 | 3.13 | Pass | Snapshot | snapshot updated |
###6.   ExplanationBox
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.3 | Pass | All | Test meets the plan |
|2 | 2.6 | Fail | Snapshot | console error |
|3 | 2.6 | Pass | Snapshot | error fixed and snapshot updated |
###7.   FirstInBackdrop
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 3.9 | Pass | All | Test meets the plan |

###8.   InputBar
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.14 | Fail | All | props error should have boolean value instead of string|version 1|
###9.   InputTable
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 3.3 | Pass | All | Test meets the plan |version 1|
###10.   Module
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |version 1|
|2 | 1.22 | Pass |/|Initial version is created|version 2|
###11.   ModuleButton
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |
|2 | 1.22 | Pass |/|Initial version is created|
|3 | 3.13 | Fail |snapshot|ripple color changed to grey and border radius changed|
###12.   ModuleProgress
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |
|2 | 1.22 | Pass |/|Initial version is created|
|3 | 1.27 | Fail |Props passing changed|Change passing values|
|4 | 1.27 | Pass | /                     |Props updated|
###13.   ProcedureImplementationon
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.12 | Pass | / | Test meets the plan |
###14.   ProcedureOperation
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.6 | Pass | / | Test meets the plan |
###15.   SpeedMenu
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.30 | Fail | All | No code has been constructed |
|2 | 1.30 | Pass |/|Initial version is created|
|3 | 2.4 | Fail |should match speedMenu snapshot|Change styles|
|4 | 2.4 | Pass | /                     |Snapshot updated|
###16.   SwitchAnimation
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.27 | Fail | All | No code has been constructed |
|2 | 1.27 | Pass |/|Initial version is created|version 2|
|3 | 2.4 | Fail |should match snapshot|Change props passing|version 3|
|4 | 2.4 | Pass | /                     |Snapshot updated|version 4|
|5 | 2.7 | Fail | should call AnimationSlider, should call AnimationControl |useEffect causes another call to those two components|version 5|
|6 | 2.7 | Pass | / |modify test file, update to 2 times|version 6|
###17.   TickCross
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 3.3 | Pass | All | Test meets the plan |
###18.   TipFrame
|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|
|--------|----|---------|--------------|------------------|----------------|
|1       | 3.07 | Fail  | All          | No code has been constructed|     |
|2       | 3.07 | Pass  | /            | /                |

