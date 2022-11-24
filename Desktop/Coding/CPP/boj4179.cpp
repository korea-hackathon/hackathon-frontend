#include <bits/stdc++.h>
using namespace std;
char board[1002][1002];
int check[1002][1002];
int checkF[1002][1002];
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
queue<pair<int,int>> Q;
queue<pair<int,int>> fQ;
int main(){
    int n,m; cin >> n >> m;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            check[i][j]=-1;
            checkF[i][j]=-1;
        }
    }
    for(int i=0;i<n;i++){
        string a; cin >> a;
        for(int j=0;j<m;j++){
            board[i][j]=a[j];
            if(board[i][j]=='J'){
                Q.push({i,j});
                check[i][j]=0;
            }
            if(board[i][j]=='F'){
                fQ.push({i,j});
                checkF[i][j]=0; 
            }
        }
    }
    while(!fQ.empty()){
        int x = fQ.front().first;
        int y = fQ.front().second;
        fQ.pop();
        for(int i=0;i<4;i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx>=n || ny>=m || ny<0 || nx < 0) continue;
            if(board[nx][ny]=='#' || checkF[nx][ny]>0) continue;
            fQ.push({nx,ny}); 
            checkF[nx][ny]=checkF[x][y]+1;
        }
    }
    while(!Q.empty()){
        int x = Q.front().first;
        int y = Q.front().second;
        Q.pop();
        for(int i=0;i<4;i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx>=n || ny>=m || nx<0 || ny<0){
                cout << check[x][y]+1;
                return 0;
            }
            if(check[nx][ny]>=0 || board[nx][ny]=='#') continue;
            if(checkF[nx][ny]!=-1 && check[x][y]+1 >=checkF[nx][ny]) continue;
            Q.push({nx,ny});
            check[nx][ny]=check[x][y]+1;
        }
    }
    cout << "IMPOSSIBLE" ;
}