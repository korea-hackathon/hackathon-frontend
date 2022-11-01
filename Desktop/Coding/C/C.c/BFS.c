#include <stdio.h>
int QueueX[502];
int QueueY[502];
int vis[502][502];
int cursur=0;
int front=0;
int board[502][502] =
{{1,1,1,0,1,0,0,0,0,0},
 {1,0,0,0,1,0,0,0,0,0},
 {1,1,1,0,1,0,0,0,0,0},
 {1,1,0,0,1,0,0,0,0,0},
 {0,1,0,0,0,0,0,0,0,0},
 {0,0,0,0,0,0,0,0,0,0},
 {0,0,0,0,0,0,0,0,0,0} };
int n=7,m=10;
int dx[4]={1,0,-1,0};
int dy[4]={0,1,0,-1};
void push(int x,int y){
    QueueX[cursur]=x;
    QueueY[cursur]=y;
    cursur++;
}
void pop(){
    QueueX[front]=0;
    QueueY[front]=0;
    front++;
}
int frontx(){
    return QueueX[front];
}
int fronty(){
    return QueueY[front];
}
int empty(){
    if(cursur-front==0) return 1;
    else return 0;
}
int main(){
    vis[0][0]=1;
    push(0,0);
    while(!empty()){
        int x=frontx(),y=fronty(); pop();
        printf("%d %d\n",x,y);
        for(int dir=0;dir<4;dir++){
            int nx = x+dx[dir];
            int ny = y+dy[dir];
            if(nx<0 || nx>=m || ny<0 || ny>=n) continue;
            if(vis[nx][ny]==1 || board[nx][ny]!=1) continue;
            vis[nx][ny]=1;
            push(nx,ny);
        }
    }
}