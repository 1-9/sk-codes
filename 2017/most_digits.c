#include <stddef.h>
#include <stdio.h>
#include <string.h>

int find_longest(int *numbers, size_t numbers_size);
int numberLength(int number);

int main() {
  int arr[] = {-268457145, -2052,     -16983,     -2134168,  -22,
               -4476969,   -1052733,  -268441839, -10821727, -545,
               -77603168,  -16810869, 2147481013, -8399};
  find_longest(arr, 14);
  printf("%d\n", numberLength(arr[0]));
  if (-2052 < -268457145)
  {
    printf("%d\n", 00);
  }
  printf("%d\n", -2052 < -268457145);
  return 0;
}

int find_longest(int *numbers, size_t numbers_size) {
  long long int ans = numbers[0], ansLength = numberLength(ans);
  for (int i = 0; i < numbers_size; ++i) {
    if (ans < numbers[i]) {
      int currentLength = numberLength(numbers[i]);
      if (ansLength < currentLength && numbers[i] > 0) {
        ans = numbers[i];
        ansLength = currentLength;
      }
    }
  }
  printf("%lld\n", ans);
  return ans;
  return numbers[0];
}

int numberLength(int number) {
  char numberString[100];
  sprintf(numberString, "%d", number);
  return strlen(numberString);
}
