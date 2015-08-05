/*!
 * Copyright 2010 - 2015 Pentaho Corporation.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
define(['common-ui/prompting/WidgetBuilder', 'common-ui/prompting/builders/PromptPanelBuilder'],  function (WidgetBuilder, PromptPanelBuilder) {

  describe("WidgetBuilder", function() {

    var wb = WidgetBuilder.WidgetBuilder;

    it("should have mappings array", function() {       
      expect(wb.mapping).toBeDefined();
    });

    it("should throw an error trying to build a prompt-panel with no arguments", function() {
      expect(wb.build).toThrow();
    });

    it("should successfully build a prompt panel", function() {
      var buildPanelComponentsFn = jasmine.createSpy('buildPanelComponents');
      var args = {
        buildPanelComponents: buildPanelComponentsFn
      } 

      var panel = wb.build(args, 'prompt-panel');
      expect(panel.type).toEqual('ScrollingPromptPanelLayoutComponent');
      expect(buildPanelComponentsFn).toHaveBeenCalled();
      expect(panel.promptPanel).toBeDefined();
    });

  });

});