class mainPage{
    openMainPage(){
        browser.url("https://webdriver.io/");
    }
    get searchButton(){
        return $('[class="DocSearch-Button-Placeholder"]')
    }
    clickSearchButton(){
        this.searchButton.click();
    }                                                                             
                            
    get searchInput(){
        return $('[class="DocSearch-Input"]')
    }
    setSearchInput(){
        this.searchInput.addValue('Test')
    }
}
export default new mainPage();