note: Correctness here specifically refers to the correctness of a computational problem which has input and output

## Input and output

Input is something that is put in, and output is something produced.

As for a computational algorithm, input refers to instances that the algorithm take for further computation.

Output is what the algorithm produced after processing the input.

### Legal input

Any input instances that can be properly processed by a specific algorithm.

### Illegal input

Any input instances that are not what a specific algorithm expects to take.

Correctness of a computational algorithm only cares about legal input instances.

e.g.

An algorithm expects to take integers as input, then anything other than integers are illegal

## Termination

If an algorithm halts when run on any legal input, it accords with termination.

On the contrary, if an algorithm cannot halt when run on any legal input, it does not meet the requirement of termination.


## Correctness

An algorithm for a computational problem is correct, if for every legal input instance, the required output is produced.

### Partial correctness

For every legal input, if the algorithm terminates, then it produces an expected output.

On the other hand, if the algorthm failed to terminate, it is still partially correct.

e.g.  The algorithm expects to produce an output 1. When i is less or equal to 1, it can terminate; otherwise, it will not terminate. This is partially correct.
```
while(true && i > 1)
{
    i++;
}
return i;
```

### Total correctness

For every legal input, the algorithm indeed terminates and it produces an expected output.
In other words, if the algorthm failed to terminate, it does not meet the requirement of total correctness.

e.g. The algorithm expects to produce an output 10.
```
i = 1;
while(i < 10)
{
    i++;
}
return i;
```
