1. Control flow
   if … then … [else …]
   while … do …
   for … do …
   Indentation replaces braces 
   Method declaration
   Algorithm method (arg [, arg…])
   	Input …
   	Output …
2. 解释swap method
3. 解释变量 如 bubblesort（arr）， arr is blahblah...
4. 伪代码tutorial内容：while loop，for loop， method call，if else，

Control flow
if … then … [else …]
while … do …
repeat … until …
for … do …
Indentation replaces braces 

Method declaration
Algorithm method (arg [, arg…])
	Input …
	Output …



Method call
method (arg [, arg…])

Return value
return expression

Expressions:
Assignment
Equality testing
n2	Superscripts and other mathematical formatting allowed'

break

------




1. Bubble Sort

   Algorithm: BubbleSort(Arr)

   Input: an array of integers Arr.

   Output: The result of sorting Arr.

```pseudocode
   length = Arr.length
   for i from 0 to length-1 do
        for j from 0 to length-1-i do
            if Arr[j] > Arr[j+1] then
                swap(Arr[j], Arr[j+1])
        	end if
        end for
   end for
   
   return Arr
    

```



2. Selection Sort

   **Algorithm:** **SelectionSort**(**Arr**)

   **Input:** an array of integers **Arr**.

   **Output:** The result of sorting **Arr**.

```pseudocode
	n = Arr.length
	for j=1 to n-1 do
		smallest = j
		for i = j+1 to n do
			if seq[i] < seq[smallest] then
				smallest = i
			end if
		end for
		swap(Arr[j],Arr[smallest])
	end for
	
	return Arr

```



3. Insertion Sort

   **Algorithm:** **InsertionSort**(**Arr**)

   **Input:** an array of integers **Arr**.

   **Output:** The result of sorting **Arr**.

```pseudocode
	length = Arr.length
	for i = 1 to length -1 do
		preIndex = i - 1
 		current = arr[i]
	 	while preIndex >= 0 && current < Arr[preIndex] do
  	 		Arr[preIndex + 1] = Arr[preIndex]
 	  		preIndex--
 		end while
 	Arr[preIndex + 1] = current
	end for
	return Arr

```



4. Quick Sort

   **Algorithm:** **QuickSort**(**Arr**,**low**,**high**)

   **Input:** an array of integers **Arr**,the start position of Arr **low**, the end position of Arr **high**.

   **Output:** The result of sorting **Arr**.

```pseudocode
  if low < high then
       pivotpos = Partition(Arr,low, high)
       QuickSort(Arr,low,pivotpos-1)
       QuickSort(R,pivotpos+1,high)
  end if
  return Arr
```

  	 **Algorithm:** **partition**(**Arr**, **a**, **b**)

​	   **Input:** an array of integers **Arr**, the start position of Arr **a**, the end position of Arr **b**.

 	  **Output:** the position of a generate pivot from Arr[a] to Arr[b].

```pseudocode
 pivot = opsition of generate element from Arr[a] to Arr[b]
 swap(Arr[pivot],Arr[a])
 storeIndex = x + 1
   for i = x + 1 to b do
     if Arr[i] < Arr[pivot] then
       swap(Arr[i], Arr[storeIndex])
       storeIndex++
     end if
   end for
   temp = storeIndex - 1
   swap(Arr[pivot], Arr[storeIndex - 1])
   pivot = temp
   
 return pivot

```

 

 Quick sort plan B：	

  	 **Algorithm:** **QuickSort**(**Arr**)

​	   **Input**: an array of integers **Arr**.

​	   **Input:** an array of integers **Arr**, the start position of Arr **a**, the end position of Arr **b**.

 	  **Output:** The result of sorting **Arr**.

```pseudocode
 //partition(a,b) is a subset of Arr including all elments from Arr[a] to Arr[b].

for each unsorted partition(a,b) do
 pivot = opsition of generate element from Arr[a] to Arr[b]
 swap(Arr[pivot],Arr[a])
 storeIndex = x + 1
   for i = x + 1 to b do
     if Arr[i] < Arr[pivot] then
       swap(Arr[i], Arr[storeIndex])
       storeIndex++
     end if
   end for
   swap(Arr[pivot], Arr[storeIndex - 1])
 end for  
 return Arr

```




5. Merge Sort

   **Algorithm:** MergeSort(Arr)

   **Input:** an array of integers **Arr**. the starting point of the left part **leftIndex,** the starting point of the right part **rightIndex**.

   **Output:** the result of sorting **Arr**.

```pseudocode
if leftIndex > rightIndex then
	return Arr
else 
	midIndex = (leftIndex + rightIndex) / 2
	mergeSort(array, leftIndex, midIndex)
	mergeSort(array, midIndex+1, rightIndex)
	merge(array, leftIndex, midIndex, rightIndex)
	return Arr
end if
```



6. Heap Sort

   **Algorithm:** HeapSort(Arr)

   **Input:** an array of integers **Arr**.

   **Output:** The result of sorting **Arr**.

```pseudocode
for i = Arr.length - 1 to   do
	  maxHeapify(Arr, 0, i)
      swap(0, i)
end for
return Arr
```

   **Algorithm:** maxHeapify(Arr, index, heapSize)

   **Input:** an array of integers **Arr**. an integer index, an integer heapSize.

   **Output:** The result of sorting **Arr**.

```
iMax = 0, iLeft = 0, iRight = 0
while (true) {
  iMax = index;
  iLeft = 2 * index + 1
  iRight = 2 * (index + 1)
  if iLeft < heapSize && Arr[index].value < Arr[iLeft].value then
     iMax = iLeft
  end if
  if iRight < heapSize && Arr[iMax].value < Arr[iRight].value then
     iMax = iRight
  end if
  if iMax != index then             
     swap(Arr, iMax, index)
     index = iMax
   else 
     break
   end if
end while        
```
