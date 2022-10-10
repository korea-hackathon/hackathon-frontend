#include <stdio.h>
#include <string.h>
#include <stdlib.h>
typedef struct 
{
    int x;
    int y;
}point;
int compare(const void* a,const void* b){
    point A = *(point *)a;
    point B = *(point *)b;
    if(A.y>B.y) return 1;
    else if(A.y == B.y){
        if(A.x>B.x) return 1;
        else return -1;
    }
    return 0;
}
int main(){
    int N; scanf("%d",&N);
    point* arr = (point *)malloc(N*sizeof(point));
    for(int i=0;i<N;i++){
        scanf("%d %d",&arr[i].x,&arr[i].y);
    }
    qsort(arr,N,sizeof(point),compare);
    for(int i=0;i<N;i++){
        printf("%d %d\n",arr[i].x,arr[i].y);
    }
    return 0;
}
