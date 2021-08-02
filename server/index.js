import * as alt from "alt-server";
import * as chat from "chat";


// =============================== Commands Begin ==================================================

chat.registerCmd("dv", player => {
    if(player.vehicle !== null) {
        player.vehicle.destroy();
    }
});


// =============================== Commands End ====================================================
