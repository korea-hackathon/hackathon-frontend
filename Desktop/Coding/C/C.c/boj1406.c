#include <stdio.h>
#include <string.h>
int curser=0;
void L(){
    if(curser!=0)curser--;
}
void D(int size){
    if(curser<size) curser++;
}
void B(int arr[]){
    if(curser!=0){
        arr[curser-1]=0;
    }
}