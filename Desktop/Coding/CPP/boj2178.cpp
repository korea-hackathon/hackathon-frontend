#include <bits/stdc++.h>
using namespace std;
int board[100][100];
int check[100][100];
int dist[100][100];
int dx[4]={0,1,-1,0};
int dy[4]={1,0,0,-1};
int main(){
    int n,m; cin >> n >> m;
    for(int i=0;i<n;i++){
        string a; cin >> a;
        for(int j=0;j<m;j++){
            board[i][j]=a[j]-48;
        }
    }
    queue<pair<int,int>> Q;
    Q.push({0,0});
    check[0][0]=1;
    dist[0][0]++;
    while(Q.size()>0){
        int x = Q.front().first;
        int y = Q.front().second;
        Q.pop();
        if(n)
        if(x==n-1 && y==m-1){
            cout << dist[n-1][m-1];
            break;
        }
        for(int i=0;i<4;i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx>=0 && nx < n && ny>=0 && ny<m && board[nx][ny]==1 && !check[nx][ny]){
                check[nx][ny]=1;
                Q.push({nx,ny});
                dist[nx][ny]=dist[x][y]+1;
            }
        }
    }
}