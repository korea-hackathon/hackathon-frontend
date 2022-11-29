#include <bits/stdc++.h>
using namespace std;
int board[300][300];
int check[300][300];
int dx[8]={-1,-2,1,2,-1,-2,1,2};
int dy[8]={2,1,2,1,-2,-1,-2,-1};
queue<pair<int,int>> Q;
int main(){
    int t; cin >> t;
    while(t--){
        Q = queue<pair<int,int>>();
        memset(board,0,sizeof(board));
        memset(check,-1,sizeof(check));
        int size; cin >> size;
        int n,m; cin >> n >> m; // 시작 
        int a,b; cin >> a >> b; // 끝
        Q.push({n,m});
        check[n][m]=0;
        while(!Q.empty()){
            int x = Q.front().first;
            int y = Q.front().second; Q.pop();
            if(x==a && y==b){
                cout << check[x][y];
                cout << "\n";
            }
            for(int dir=0;dir<8;dir++){
                int nx = x + dx[dir];
                int ny = y + dy[dir];
                if(nx>=0 && nx<size && ny>=0 && ny<size){
                    if(check[nx][ny]==-1){
                        Q.push({nx,ny});
                        check[nx][ny]=check[x][y]+1;
                    }
                }
            }
        }
    }
}