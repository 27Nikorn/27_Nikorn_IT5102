function saveActivity() {
    const activity = document.getElementById("activity").value;
    const date = document.getElementById("date").value;
    const detail = document.getElementById("detail").value;

    if (activity === "" || date === "" || detail === "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    const list = document.getElementById("activityList");

    const item = document.createElement("div");
    item.className = "activity-item";

    item.innerHTML = `
        <strong>${activity}</strong>
        <p>วันที่: ${date}</p>
        <p>${detail}</p>
    `;

    const empty = document.querySelector(".empty");

    if (empty) {
        empty.remove();
    }

    list.appendChild(item);

    document.getElementById("activity").value = "";
    document.getElementById("date").value = "";
    document.getElementById("detail").value = "";

    alert("บันทึกกิจกรรมสำเร็จ");
}