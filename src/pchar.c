#include <stdio.h>

int main()
{
    int *test[] = {1, 2, 3, 4, 5, 6};
    // 定义指针数组*test2
    int *test2[6] = {};

    for (int i = 0; i < 6; i++)
    {
        printf("Value of test[%d] = %d\n", i, test[i]);
        // 赋值为*test[i]的地址
        test2[i] = &test[i];
    }
    for (int j = 0; j < 6; j++)
    {
        printf("Value of *test2[%d] = %d\n", j, *test2[j]);
    }
    return 0;
}