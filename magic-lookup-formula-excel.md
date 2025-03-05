# Magic Formula by Domenico @Alstom
## looks up a value according to 2 references

for Excel

``` Excel
=INDEX(Sheet3!$A$1:$HD$650;MATCH($A7;Sheet3!$A:$A;0);MATCH(C$6;Sheet3!$2:$2;0))
       datasheet-no spaces++
              alway start from A1 here
                    end of search: leave this high value
				 1st. ref. Value: specify column+row
					    specify columns to search in: here from A to A, i.e. only in A
						   offset: 0 for value in actual column
							   2nd ref. value: specify column+row
								      specify rows to search in: here from 2 to 2, i.e. only in 2
									     offset: 0 for value in actual row
```
