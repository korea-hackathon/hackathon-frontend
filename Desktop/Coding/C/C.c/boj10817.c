#include <stdio.h>
void sort(int arr[]){
    for(int i=0;i<3;i++){
        for(int j=0;j<3-1-i;j++){
            if(arr[j]>arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
int main(){
    int arr[3];
    for(int i=0;i<3;i++){
        scanf("%d",&arr[i]);
    }
    sort(arr);
    printf("%d",arr[1]);
}