const router = require('express').Router();
const path = require("path");
const { getAllChallenges,
        addChallenge,
        getSingleChallenge,
        peoplePassed,
        getSingleUser,
        addNewUser,
        getTops,
        deleteUser,
        editChallenge,
        deleteChallenge,
        getUsersNum,
        getAllArticles,
        getSingleArticle,
        updateArticle,
        deleteArticle,
        addNewArticle,
        sendEmail,
        articleSee,
        testFunc,
        increase} = require('./funcs');

router.route("/users/login").post(getSingleUser);
router.route('/users').post(addNewUser);
router.route('/users/:id').delete(deleteUser);
router.route('/challenges').get(getAllChallenges).post(addChallenge);
router.route('/challenges/:id').get(getSingleChallenge).put(editChallenge).delete(deleteChallenge);

// for blog
router.route("/blog").get(getAllArticles).post(addNewArticle);
router.route("/blog/:id").get(getSingleArticle).put(updateArticle).delete(deleteArticle);
router.route("/blog/saw/:id").put(articleSee);

// increase people that passed specific challenge // 
router.route('/challenges/passed/:id').put(increase);
router.route('/users/passed/:id').put(peoplePassed);

// for test user function and send his result array
router.route("/test/:id").post(testFunc);

// tops
router.route('/toper').get(getTops);

// get the number of users
router.route('/usersNumber').get(getUsersNum);

// forgot password
router.route("/email").post(sendEmail);

// sitemaps

// home page
router.route("/sitemap_home.xml").get((req, res) => {
    res.sendFile(path.resolve(__dirname, "sitemap.xml"));
});

// chanllenges page
router.route("/sitemap_challenges.xml").get((req, res) => {
    res.sendFile(path.resolve(__dirname, "sitemap-1.xml"));
});

// tops page
router.route("/sitemap_tops.xml").get((req, res) => {
    res.sendFile(path.resolve(__dirname, "sitemap-2.xml"));
});

// login and signin page
router.route("/sitemap_auth.xml").get((req, res) => {
    res.sendFile(path.resolve(__dirname, "sitemap-3.xml"));
});

// all pages
router.route("/sitemap_all.xml").get((req, res) => {
    res.sendFile(path.resolve(__dirname, "sitemap-all.xml"));
});

module.exports = router;