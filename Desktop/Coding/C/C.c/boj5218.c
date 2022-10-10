#include <stdio.h>
#include <string.h>
int main(){
    char arr[21];
    char arr2[21];
    int t;scanf("%d",&t);
    for(int i=0;i<t;i++){
        int distance=0;
        scanf("%s %s",arr,arr2);
        int len = strlen(arr);
        printf("Distances: ");
        for(int i=0;i<len;i++){
            distance = arr2[i]-arr[i];
            if(distance<0){
                distance = (arr2[i]-arr[i]+26) -(arr[i]-arr[i]);
            }
            printf("%d ",distance);
        }
        printf("\n");
    }
}