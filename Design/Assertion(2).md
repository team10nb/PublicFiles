

const bubbleAssert = 
                    <div>                    
                        // unsorted array here
                        for i = lengthOfArray to 1 {
    					  // From the first element to the i th element are unsorted
    					  // Elements after i th are sorted if exist
    					
                          for j = 1 to i {              
                        	// The j th element is the largest among the first to j th
    
                            if currentElement > rightElement {
    
                              swap(currentElement, rightElement)
                        	}
                        	// The j+1 th element is the largest among the first to j+1 th
      
                          }
                          // The i th element is the largest among the first to j+1 th
                          // From i th to the end of the array elements are sorted
                        }
                        // From 1 st to the end of the array elements are sorted
                    </div>

const insertAssert = 
                    <div>
                        mark first element as sorted
                        // The first element is sorted
                        // Unsorted array here
                        for each unsorted element X{
                        // Elements before the unsorted element X, they are sorted
                            'extract' the element X

                            for j = lastSortedIndex down to 0{
    
                                if current element j > X{
    
                                    move sorted element to the right by 1
                                    // X is smaller than the elements which swapped with it
                                }
                                break loop and insert X here
                                
                            }
                            // X and elements before X, they are all sorted
                        }
                        // last unsorted X is sorted, which means all numbers are sorted
                    </div>

const selectAssert = 
                    <div>
                        repeat (numOfElements - 1) times{

                            set the first unsorted element as the minimum
                            // Unsorted array here
                            for each of the unsorted elements{
    
                                if element < currentMinimum{
    
                                    set element as new minimum
                                }
                            // the last marked number is the minumum among the unsorted numbers
                            swap minimum with first unsorted position
                            }
                            // the new minimum and the numbers before the new minimum are all sorted
                        }
                        // Repeating end, the last new minimum is the last number, which means all numbers are sorted
                        
                    </div>

const mergeAssert = 

​                    

                    <div>
                    // Unsorted array, left and right index are start and end of the array
                    mergeSort(array, leftIndex, rightIndex) {
                        if leftIndex > rightIndex {
                        	// base case: no more partition to be merged
                        	return
                        } 
                        // leftIndex is less than rightIndex
                        midIndex = (leftIndex + rightIndex) / 2
                        leftIndex to rightIndex of array is splited into two parts
                        mergeSort(array, leftIndex, midIndex)
                        // leftIndex to midIndex of the array (left part) are sorted
                        mergeSort(array, midIndex+1, rightIndex)
                        // midIndex to rightIndex of the array (right part) are sorted
                        merge(array, leftIndex, midIndex, rightIndex)
                        // left part and right part are merged into sorted
                        // leftIndex to rightIndex of array are sorted
                    }
                    // start to end of array are sorted, merge sort finished
                    </div>

const quickAssert = 
                    <div>
                    // Unsorted array here
                    for each (unsorted) partition{

                        set a random element among the array as pivot
                        put the pivot to the leftmost position of the array
                        storeIndex = pivotIndex + 1
    
                        for i = pivotIndex + 1 to rightmostIndex{
    
                            if element[i] < element[pivot]{
    
                                swap(i, storeIndex); storeIndex++
                                // The element[i] would be swapped with pivot
                            }
                        swap(pivot, storeIndex - 1)
                        }
                        // The pivot is at its sorted position 
                    }
                    //  The Partition size equals the array size, which means all numbers are sorted
                    </div>

const heapAssert = 
                    <div>
                        Build_max_heap from unordered array
                        for each unsorted element {
                            set the first unsorted element as the maximum
                            for i = 0 down to lastSortedIndex - 1{
                                if element[n] < element[maximum]{
                                    swap(n, maximum)
                                    // now max element is at the end of array
                                    Discard node n from heap decrementing heap size
                                }
                            }
                            // new root may violate maxheap, but children are max_heap
                        }
                        // All nodes are discarded from the heap, the array is sorted.
                    </div>


​            
​                 

