#Test Plan

##Abstract
The test plan is a document that describes the scope, strategy and method, resources and progress of the test. It is macro planning for the whole testing activity, which determines the testing task, the testing method, the tested characteristics and the expected output in the process. The test plan can effectively prevent the risks of the plan and ensure the smooth implementation of the test activities within the plan's scope.

## Component Testing  
###1.   AlgorithmButton
|Test Name|Description|Operation|Expected Outcome|
|---------|-----------|---------|----------------|
|should contain title and code|title and code should be shown on the button|null|title and code are found on the button|
|should call onClick|Click the AlogrithmButton will call the onClick function|Click AlogrithmButton|onClick will be called once|
|should match Snapshot|Compare new snapshot with old one| null | Snapshots are the same|
###2.	AnimationControl
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain 5 buttons|AnimationControl component should have 5 buttons: reset, go backward, play/pause, go forward and the speed choosing menu.|Find buttons|5 buttons found|
| should call functions | When click buttons, corresponding functions should be called. | Mock click event. | every onClick function will be called once. |
| should match AnimationControl snapshot | Compare new snapshot with old one. | take snapshot and compare | Snapshots are the same. |
###3.   AnimationSlider
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match Snapshot | Compare new snapshot with old one. | take snapshot and compare | Snapshots are the same. |
###4.   AnimationWithCode
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call AnimationSlider|The component contains a sub component AnimationSlider.|None|Component AnimationSlider is called once.|
|should call AnimationControl|The component contains a sub component AnimationControl.|None|Component AnimationControl is called once.|
| should match Snapshot | Compare new snapshot with old one. | None | Snapshots are the same. | 
<br>
    

###5.   CorrectnessHelp
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should contain button |test whether titles and buttons are rendered properly| Mock click event | Contain 1 button |
| should match CorrectnessHelp Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###6.   ExplanationBox
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should match Snapshot | Compare new snapshot with old one. | None | Snapshots are the same. |
###7.   FirstInBackdrop
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match FirstInBackdrop Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###8.   InputBar
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should contain buttons | The component contains two buttons. | None | Contain two buttons |
| should call functions |When click buttons, corresponding functions should be called| mock click | functions are called once |
| should match Snapshot | Compare new snapshot with old one. | None | Snapshots are the same. |
###9.   InputTable
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should contain title & button |test whether titles and buttons are rendered properly| Mock click event | Contain Legal Input, Illegal Input, Input and Result; Contain 4 buttons |
| should match InputTable Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###10.   Module
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call two modules|two sub components shall be called properly|mock two modules and render this module|the two modules are called|
###11.   ModuleButton
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain bubblesort|This component should be able to display title properly|try find the demo text|demo text found|
| should call onclick | should be able to response to click event and call the onclick function | Mock click event. | onClick function will be called once. |
| should match snapshot | Compare new snapshot with old one. | take snapshot and compare | Snapshots are the same. |
###12.   ModuleProgress
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###13.   Implementationon
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call InputBar|An InputBar shall be called|mock an InputBar and render it|An InputBar is called|
|should call AnimationSlider|An AnimationSlider shall be called|mock an AnimationSlider and render it|An AnimationSlider is called|
|should call AnimationControl|An AnimationControl shall be called|mock an AnimationControl and render it|An AnimationControl is called|
|should call ExplanationBox|An ExplanationBox shall be called|mock an ExplanationBox and render it|An ExplanationBox is called|
| should match Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###14.   ProcedureOperation
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
|should call InputBar|An InputBar shall be called|mock an InputBar and render it|An InputBar is called|
|should call SwitchAnimation|A SwitchAnimation shall be called|mock a SwitchAnimation and render it|A SwitchAnimation is called|
| should match Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
###15.   SpeedMenu
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should have buttons|SpeedMenu component should have a button and speed options (menuitems).|Find buttons|Buttons should be found|
|should call handleClick and close|The button click event should call handleClick and close function|Click SpeedMenu<br>Click a speed option|handleClick and handleClose will be called once.|
| should match SpeedMenu snapshot | Compare new snapshot with old one. | take snapshot and compare | Snapshots are the same. |
###16.   SwitchAnimation
|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call AnimationSlider|Test whether AnimationSlider is successfully called|Mock AnimationSlider and call it|call time is 1|
|should call AnimationControl|Test whether AnimationControl is successfully called|Mock AnimationControl and call it|call time is 1|
| should match Snapshot | Compare new snapshot with old one. | Take a snapshot and compare | Snapshots are the same. |
###17.   TickCross
|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match TickCross snapshot | Compare new snapshot with old one. | Take a snapshot and compare | Snapshots are the same. |
###18.   TipFrame
|Test Name|Description|Operation|Expected Outcome|
|---------|-----------|---------|----------------|
|should contain message|Message should be shown|null|The message is shown|
|should contain button|Confirm button should be included|null|The button is shown|
|should match Snapshot|Compare new snapshot with old one|null | Snapshots are the same|

