const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks')
const session = require('express-session')
const Memorystore = require('memorystore')(session)
// 등등 모듈들

const app = express();

const login = require('./routes/login');
const join = require('./routes/join');
const mainRouter = require('./routes/main');
const diary = require('./routes/diary');
const test = require('./routes/test'); //테스트용----------------------<<<
const example = require('./routes/example'); //테스트용----------------------<<<
//등등 라우터들


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'ejs');
nunjucks.configure('./view', {
    express: app,
    watch: true
})
app.set('views',path.join(__dirname,'view'));
app.use('/', express.static(path.join(__dirname,'public')));

app.use('/',login);
app.use('/join',join);
app.use('/main',mainRouter);
app.use('/diary',diary);
app.use('/test',test); //테스트용-------------------<<<
app.use('/example',example); //테스트용-------------------<<<
//가져왔던 라우터들

//세션/////////////////////////////////////////
let maxAge = 60*1000 
const sessionObj = {
    secret: "wegf6124@#$@#!",  // salt -> 암호화를 할 때 필요한 요소값
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({ checkPeriod: maxAge }),  // 서버를 저장할 공간 설정, 
    // checkPeriod : 서버쪽 세션의 유효기간
    cookie: {
        maxAge: maxAge
    }
    // 브라우저 쿠키의 유효기간
}

app.use(session(sessionObj))
// session() -> 세션을 생성해주는 미들웨어
 
app.use(express.urlencoded({extended: true}))
 
app.use(login);
 
///////////////////////////////////////////

app.use((req,res,next)=>{   //404 에러처리 미들웨어
    const err = new Error('NOT FOUND');
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{     //500 에러처리 미들웨어
    res.status(err.status||500);
    res.render('error');
});

app.listen(5433,()=>{      //포트설정
    console.log('5433번 포트에서 서버 대기중입니다!');
});
