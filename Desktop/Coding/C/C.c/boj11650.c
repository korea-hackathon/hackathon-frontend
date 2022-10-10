#include <stdio.h>
#include <stdlib.h>
void Swap(int arr[],int a,int b){
    int temp;
    temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
void QuicSort(int arr[],int lower,int upper){
    if(lower>upper) return;
    int pivot=arr[lower];
    int start=lower;
    int end = upper;
    while(upper>lower){
        while(pivot>=arr[lower]) lower++;
        while(pivot<arr[upper]) upper--;
        if(upper>lower){
            Swap(arr,lower,upper);
        }
    }
    Swap(arr,start,upper);
    QuicSort(arr,start,upper-1);
    QuicSort(arr,upper+1,end);
}
void QuicSortAll(int arr[],int arr2[],int lower,int upper){
    if(lower>upper) return;
    int pivot=arr2[lower];
    int start=lower;
    int end = upper;
    while(upper>lower){
        while(pivot>=arr2[lower]) lower++;
        while(pivot<arr2[upper]) upper--;
        if(upper>lower){
            Swap(arr,lower,upper);
            Swap(arr2,lower,upper);
        }
    }
    Swap(arr,start,upper);
    Swap(arr2,start,upper);
    QuicSortAll(arr,arr2,start,upper-1);
    QuicSortAll(arr,arr2,upper+1,end);
}
void QuicSortUtil(int arr[],int size){
    QuicSort(arr,0,size-1);
}
void printfArray(int arr[],int arr2[],int size){
    for(int i=0;i<size;i++){
        printf("%d %d\n",arr[i],arr2[i]);
    }
}
int main(){
    int t;
    int x[100000]={0,};
    int y[100000]={0,};
    int start;
    int end;
    int cnt=0;
    scanf("%d",&t);

    for(int i=0;i<t;i++){
        scanf("%d %d",&x[i],&y[i]);
    }
    QuicSortAll(x,y,0,t-1);
    for(int i=0;i<t-1;i++){
        while(y[i]==y[i+1]){
            end=i+1;
            ++cnt;
            ++i;
        }
        if(cnt>=1){
            start=end-cnt;
            QuicSort(x,start,end);
        }
        cnt=0;
    }
    printfArray(x,y,t);
}