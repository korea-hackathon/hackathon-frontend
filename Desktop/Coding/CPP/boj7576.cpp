#include <bits/stdc++.h>
using namespace std;
#define min = 
int board[1000][1000];
int check[1000][1000];
int dx[4]={0,1,-1,0};
int dy[4]={1,0,0,-1};
int dist[1000][1000];
int main(){
    queue<pair<int,int>> Q;
    int n,m; cin >> m >> n;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin >> board[i][j];
            check[i][j]=-1;
            if(board[i][j]==1){
                Q.push({i,j});
                check[i][j]++;
            }
        }
    }
    int ans=-1;
    while(!Q.empty()){
            int x = Q.front().first;
            int y = Q.front().second;
            Q.pop();
            for(int i=0;i<4;i++){
                    int nx = x + dx[i];
                    int ny = y + dy[i];
                    if(nx>=0 && ny>=0 && nx<n && ny<m && board[nx][ny]==0 && check[nx][ny]==-1){
                        check[nx][ny]=1;
                        Q.push({nx,ny});
                        dist[nx][ny]=dist[x][y]+1;
                    }
                }
            }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(board[i][j]==0 && check[i][j]==-1){
                cout << "-1";
                return 0;
            }
            if(dist[i][j]>=ans){
                ans=dist[i][j];
            }
        }
    }
    cout <<ans;
}