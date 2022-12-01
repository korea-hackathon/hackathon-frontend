#include <bits/stdc++.h>
using namespace std;
int board[100][100];
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
queue<pair<int,int>> Q;
int main(){
    memset(board,0,sizeof(board));
    int n,m,k; cin>>m>>n>>k;
    while(k--){
        int x1,y1,x2,y2; cin>>x1>>y1>>x2>>y2;
        for(int i=y1;i<y2;i++){
            for(int j=x1;j<x2;j++){
                board[i][j]=1;
            }
        }
    }
    int ans;
    vector<int> vec;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(board[i][j]==0){
                Q.push({i,j});
                board[i][j]=1;
                ans=1;
                while(!Q.empty()){
                    int x = Q.front().first;
                    int y = Q.front().second; Q.pop();
                    for(int dir=0;dir<4;dir++){
                        int nx = x + dx[dir];
                        int ny = y + dy[dir];
                        if(nx>=0 && nx<m && ny>=0 && ny<n){
                            if(board[nx][ny]==0){
                                Q.push({nx,ny});
                                board[nx][ny]=1;
                                ans++;
                            }
                        }
                    }
                }
                vec.push_back(ans);
            }
        }
    }
    sort(vec.begin(),vec.end());
    for(int i=0;i<vec.size();i++){
        cout << vec[i] << " ";
    }
}