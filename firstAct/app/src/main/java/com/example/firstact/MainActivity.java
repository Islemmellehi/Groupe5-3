package com.example.firstact;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button buttonlogin = (Button) findViewById(R.id.btnLogin);
        Button buttonsignup = (Button) findViewById(R.id.btnSignUp);

        buttonlogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openLoginActivity();
            }
        });
                buttonsignup.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        openSignUpActivity();
                    }
                    });
    }
    public void openLoginActivity() {
        Intent intent = new Intent(this, loginAct.class);
        startActivity(intent);
    }
    public void openSignUpActivity() {
        Intent intent = new Intent(this, signupAct.class);
        startActivity(intent);
    }


}