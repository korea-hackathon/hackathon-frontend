#include <bits/stdc++.h>
using namespace std;
int main(){
    int t; cin >> t;
    while(t--){
        string input;
        cin >> input;
        stack<char> stk;
        string answer = "YES";
        for(int i=0;i<input.length();i++){
            if(input[i]=='(') stk.push(input[i]);
            else if(!stk.empty() && input[i] == ')' && stk.top() == '(') stk.pop();
                else{
                    answer ="NO";
                    break;
                }
        }
        if(!stk.empty()) answer="NO";
        cout<< answer<<"\n";
    }
    return 0;
}