#include <stdio.h>
int Multiple(int N){
    int result=0;
    for(int i=0;i<N;i++){
        if(i%3==0 || i%5==0) result+=i;
    }
    return result;
}
int squared(int N){
    for(int i=0;i*i<N;i++){
        if(i*i == N) return 1;
    }
    return 0;
}
int power(int N){
    int max=-1;
    for(int i=2;i<=N;i*=2){
        if(i>max) max =i;
    }
    return max;
}

void insert(int idx , int num , int arr[],int len){
    for(int i=len;i>idx;i--){
        arr[i]=arr[i-1];
    }
    arr[idx]=num;
}
void erase(int idx,int arr[],int len){
    for(int i=idx;i<=len-1;i++){
        arr[i]=arr[i+1];
    }
}
void printArr(int arr[], int len){
  for(int i = 0; i < len; i++) printf("%d ",arr[i]);
  printf("\n\n");
}

void insert_test(){
  printf("***** insert_test *****\n");
  int arr[10] = {10, 20, 30};
  int len = 3;
  insert(3, 40, arr, len); // 10 20 30 40
  printArr(arr, 4);
  insert(1, 50, arr, 4); // 10 50 20 30 40
  printArr(arr, 5);
  insert(0, 15, arr, 5); // 15 10 50 20 30 40
  printArr(arr, 6);
}

void erase_test(){
  printf("***** erase_test *****\n");
  int arr[10] = {10, 50, 40, 30, 70, 20};
  int len = 6;
  erase(4, arr, len); // 10 50 40 30 20
  printArr(arr, 5);
  erase(1, arr, len); // 10 40 30 20
  printArr(arr, 4);
  erase(3, arr, len); // 10 40 30
  printArr(arr, 3);
}

int main(void) {
  insert_test();
  erase_test();
}