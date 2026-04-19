import os

with open("src/components/ProjectViewer.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace block 1
content = content.replace(
    "{['Overview', 'Project Updates', 'Updates', 'Activity Log', 'Notes'].includes(activeMenu) && (\n          <>",
    "<div style={{ display: ['Overview', 'Project Updates', 'Updates', 'Activity Log', 'Notes'].includes(activeMenu) ? 'block' : 'none' }}>\n          <>"
)

content = content.replace(
    "{activeMenu === 'Overview' && (\n                <>",
    "<div style={{ display: activeMenu === 'Overview' ? 'block' : 'none' }}>\n                <>"
)

content = content.replace(
    "                  </div>\n                </>\n              )}\n\n              {['Project Updates', 'Updates'].includes(activeMenu) && (\n                <div className=\"p-8 max-w-4xl\">",
    "                  </div>\n                </>\n              </div>\n\n              <div className=\"p-8 max-w-4xl\" style={{ display: ['Project Updates', 'Updates'].includes(activeMenu) ? 'block' : 'none' }}>"
)

content = content.replace(
    "                  </div>\n                </div>\n              )}\n\n              {activeMenu === 'Activity Log' && (\n                <div className=\"p-6\">",
    "                  </div>\n                </div>\n              </div>\n\n              <div className=\"p-6\" style={{ display: activeMenu === 'Activity Log' ? 'block' : 'none' }}>"
)

content = content.replace(
    "                  </div>\n                </div>\n              )}\n\n              {activeMenu === 'Notes' && (\n                <div className=\"p-6\">",
    "                  </div>\n                </div>\n              </div>\n\n              <div className=\"p-6\" style={{ display: activeMenu === 'Notes' ? 'block' : 'none' }}>"
)

content = content.replace(
    "                  </div>\n                </div>\n              )}\n            </div>\n          </>\n        )}\n\n        {activeMenu === 'Reports' && (\n          <div className=\"reports-module h-full bg-slate-50\" style={{ display: 'flex' }}>",
    "                  </div>\n                </div>\n              </div>\n            </div>\n          </>\n        </div>\n\n        <div className=\"reports-module h-full bg-slate-50\" style={{ display: activeMenu === 'Reports' ? 'flex' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n\n\n        {activeMenu === 'Property Details' && (\n          <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Property Details' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Owner data' && (\n          <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Owner data' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Map' && (\n          <div className=\"p-8 flex flex-col h-full\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8 flex flex-col h-full\" style={{ display: activeMenu === 'Map' ? 'flex' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Scheduler' && (\n          <div className=\"p-8 flex flex-col h-full\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8 flex flex-col h-full\" style={{ display: activeMenu === 'Scheduler' ? 'flex' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Contacts' && (\n          <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Contacts' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Budget tracker' && (\n          <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Budget tracker' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Photos' && (\n          <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Photos' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {activeMenu === 'Documents' && (\n           <div className=\"p-8\">",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Documents' ? 'block' : 'none' }}>"
)

content = content.replace(
    "            </div>\n           </div>\n        )}\n\n        {['Comps', 'Flip Analyzer', 'Repair estimator'].includes(activeMenu) && (\n          <div className=\"p-8 flex flex-col h-full bg-slate-50\">",
    "            </div>\n           </div>\n        </div>\n\n        <div className=\"p-8 flex flex-col h-full bg-slate-50\" style={{ display: ['Comps', 'Flip Analyzer', 'Repair estimator'].includes(activeMenu) ? 'flex' : 'none' }}>"
)

content = content.replace(
    "            </div>\n          </div>\n        )}\n\n        {!['Overview', 'Project Updates', 'Updates', 'Activity Log', 'Notes', 'Reports', 'Property Details', 'Owner data', 'Map', 'Comps', 'Flip Analyzer', 'Repair estimator', 'Scheduler', 'Contacts', 'Budget tracker', 'Documents', 'Photos', 'Project Settings'].includes(activeMenu) && (\n          <div className=\"flex flex-col items-center justify-center h-full text-slate-400 p-8\" style={{ minHeight: '400px' }}>",
    "            </div>\n          </div>\n        </div>\n\n        <div className=\"flex flex-col items-center justify-center h-full text-slate-400 p-8\" style={{ minHeight: '400px', display: !['Overview', 'Project Updates', 'Updates', 'Activity Log', 'Notes', 'Reports', 'Property Details', 'Owner data', 'Map', 'Comps', 'Flip Analyzer', 'Repair estimator', 'Scheduler', 'Contacts', 'Budget tracker', 'Documents', 'Photos', 'Project Settings'].includes(activeMenu) ? 'flex' : 'none' }}>"
)

content = content.replace(
    "          </div>\n        )}\n\n        {activeMenu === 'Project Settings' && (\n          <div className=\"p-8\">",
    "          </div>\n        </div>\n\n        <div className=\"p-8\" style={{ display: activeMenu === 'Project Settings' ? 'block' : 'none' }}>"
)

content = content.replace(
    "              </div>\n           </div>\n        )}\n      </div>\n    </div>\n  );\n}",
    "              </div>\n           </div>\n        </div>\n      </div>\n    </div>\n  );\n}"
)

with open("src/components/ProjectViewer.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
