#include <stdio.h>
void printArr(int arr[][20]){
    for(int i=1;i<=19;i++){
        for(int j=1;j<=19;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
}
int main(){
    int n;
    int arr[20][20]={0,};
    for(int i=1;i<=19;i++){
        for(int j=1;j<=19;j++){
            scanf("%d",&arr[i][j]);
        }
    }
    scanf("%d",&n);
    int a,b;
    for(int i=0;i<n;i++){
        scanf("%d %d",&a,&b);
        for(int j=1;j<=19;j++){
            if(arr[j][b]==0)
                arr[j][b]=1;
            else arr[j][b]=0;
        }
        for(int k=1;k<=19;k++){
            if(arr[a][k]==0)
                arr[a][k]=1;
            else
                arr[a][k]=0;
        }
    }
    printArr(arr);
}