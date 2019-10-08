/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFA010', {
    AFA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFA_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFA_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFA_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFA_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFA_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFA_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_CUSTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_QTSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFA_DTAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFA_ACUMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFA_ALOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFA_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFA_FINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFA_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFA_COMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFA_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFA_FIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_RECALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_PRODFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFA_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    AFA_PLNPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_GERPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFA_RSPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFA_MOPC: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'AFA010'
  });
};
