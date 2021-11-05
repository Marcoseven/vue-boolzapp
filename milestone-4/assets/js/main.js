/* 
Traccia:
Leggete attentamente la brief di progetto e cominciate a lavorare ad una milestone alla volta.
Ogni milesone va in una cartella dedicata es: vue-boolzapp/milesone-1

Boolzapp - a (not very) innovative messaging platform

Milestone 4:
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina).
*/

// Vue.js
const app = new Vue({
	el: "#app",
	data: {
		activeContact: 0,
		msgText: "",
		newMsgSent: {
			date: "",
			text: "",
			status: "sent",
		},
		newMsgReceived: {
			date: "",
			text: "",
			status: "received",
		},
		textFound: "",
		contacts: [
			{
				name: "Michele",
				avatar: "_1",
				visible: true,
				messages: [
					{
						date: "10/01/2020 15:30:55",
						text: "Hai portato a spasso il cane?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						text: "Ricordati di dargli da mangiare",
						status: "sent",
					},
					{
						date: "10/01/2020 16:15:22",
						text: "Tutto fatto!",
						status: "received",
					},
				],
			},
			{
				name: "Fabio",
				avatar: "_2",
				visible: true,
				messages: [
					{
						date: "20/03/2020 16:30:00",
						text: "Ciao come stai?",
						status: "sent",
					},
					{
						date: "20/03/2020 16:30:55",
						text: "Bene grazie! Stasera ci vediamo?",
						status: "received",
					},
					{
						date: "20/03/2020 16:35:00",
						text: "Mi piacerebbe ma devo andare a fare la spesa.",
						status: "sent",
					},
				],
			},
			{
				name: "Samuele",
				avatar: "_3",
				visible: true,
				messages: [
					{
						date: "28/03/2020 10:10:40",
						text: "La Marianna va in campagna",
						status: "received",
					},
					{
						date: "28/03/2020 10:20:10",
						text: "Sicuro di non aver sbagliato chat?",
						status: "sent",
					},
					{
						date: "28/03/2020 16:15:22",
						text: "Ah scusa!",
						status: "received",
					},
				],
			},
			{
				name: "Luisa",
				avatar: "_4",
				visible: true,
				messages: [
					{
						date: "10/01/2020 15:30:55",
						text: "Lo sai che ha aperto una nuova pizzeria?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						text: "Si, ma preferirei andare al cinema",
						status: "received",
					},
				],
			},
		],
	},
	/* methods */
	methods: {
		/* newMsg */
		newMsg() {
			/* newMsgSent */
			let currentData = dayjs().format("DD/MM/YYYY H:mm:ss");
			this.newMsgSent.date = currentData;
			this.newMsgSent.text = this.msgText;

			this.contacts[this.activeContact].messages.push(this.newMsgSent);
			this.msgText = "";
			/* /newMsgSent */

			/* setTimeout */
			setTimeout(function () {
				app.newMsgReceived.date = currentData;
				app.newMsgReceived.text = "Ok";
				app.contacts[app.activeContact].messages.push(app.newMsgReceived);
			}, 1000);
			/* /setTimeout */
		},
		/* /newMsg */
		searchAvatar() {},
	},
	/* /methods */
});
// /Vue.js
