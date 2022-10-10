#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// numbers_len은 배열 numbers의 길이입니다.
double solution(int numbers[], size_t numbers_len) {
    double N=0;
    for(int i=0;i<numbers_len;i++){
        N+=numbers[i];
    }
    return N/numbers_len;
}
int main(){
    int arr[11]={89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99};

    printf("%f",solution(arr,11));
}