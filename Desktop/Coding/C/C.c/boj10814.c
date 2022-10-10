#include <stdio.h>
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
int main(){
    int t;
    
}