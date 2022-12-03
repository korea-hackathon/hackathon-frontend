#include <bits/stdc++.h>
using namespace std;
int board[1000][1000];
int check[1000][1000][2];
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
int main(){
    int n,m; cin >> n >> m;
    for(int i=0;i<n;i++){
        string a; cin >> a; 
        for(int j=0;j<m;j++){
            board[i][j]=a[j]-'0';
        }
    }
    queue<pair<pair<int,int>,pair<int,int>>> Q;
    Q.push({{0,0},{0,1}});
    check[0][0][0]=1;
    while(!Q.empty()){
        int x = Q.front().first.first;
        int y = Q.front().first.second;
        int B = Q.front().second.first;
        int cnt = Q.front().second.second; Q.pop();
        if(x==n-1 && y==m-1){
            cout << cnt;
            return 0;
        }
        for(int i=0;i<4;i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx>=0 && nx<n && ny>=0 && ny<m){
                if(board[nx][ny]==1 && B==0){
                        check[nx][ny][B+1]=1;
                        Q.push({{nx,ny},{1,cnt+1}});
                }
                else if(board[nx][ny]==0 && !check[nx][ny][B]){
                    Q.push({{nx,ny},{B,cnt+1}});
                    check[nx][ny][B]=1;
                }
            }
        }
    }
    cout << "-1";
}