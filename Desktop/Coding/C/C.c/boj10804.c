#include <stdio.h>
int arr[20] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
void Reverse(int first,int end){
    int temp;
    for(int i=first;i<end;i++){
        temp = arr[first];
        arr[first] = arr[end];
        arr[end]=temp;

        first++;
        end--;
    }
}
int main(){
    for(int i=0;i<10;i++){
        int n,m;
        scanf("%d %d",&n,&m);
        Reverse(n-1,m-1);
    }
    for(int i=0;i<20;i++){
        printf("%d ",arr[i]);
    }
}