const student = {
    name: "hson",
    siblings: ["adma", "kadma"],
    showSiblings() {
        this.siblings.forEach((sib) => {
            console.log(sib);
        });
    }
};
student.showSiblings()