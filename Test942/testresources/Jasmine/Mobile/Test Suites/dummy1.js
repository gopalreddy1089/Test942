define(["Test942/Test Cases/setup_data","Test942/Test Cases/objectsync_data","Test942/Test Cases/setflow_data","Test942/Test Cases/getflow_data"], function() {
	describe("Test942/Test Suites/dummy1", function() {
		it("Test942/setup", async function() {
			var _data = testcaseData_1642395304669.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnSetup"]);
			kony.automation.button.click(["Test942/Form1","btnSetup"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setuplbl"], "text")).toEqual(_data.assert.setuplbl);
		});
		
		it("Test942/objectsync", async function() {
			var _data = testcaseData_1642395522626.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnObjectSync"]);
			kony.automation.button.click(["Test942/Form1","btnObjectSync"]);
			await kony.automation.playback.wait(2000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","objsynclbl"], "text")).toEqual(_data.assert.objsynclbl);
		});
		
		it("Test942/setflow", async function() {
			var _data = testcaseData_1642395590627.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnSetFlowTag"]);
			kony.automation.button.click(["Test942/Form1","btnSetFlowTag"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setlbl"], "text")).toEqual(_data.assert.setlbl);
		});
		
		it("Test942/getflow", async function() {
			var _data = testcaseData_1642395643186.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnGetFlowTag"]);
			kony.automation.button.click(["Test942/Form1","btnGetFlowTag"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","getlbl"], "text")).toEqual(_data.assert.getlbl);
		});
	});
});