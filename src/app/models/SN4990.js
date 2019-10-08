/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SN4990', {
    N4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N4_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_TIPOCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N4_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N4_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N4_QUANTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_VLROC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_VLROC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_VLROC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_VLROC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_VLROC5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N4_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N4_VENDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_TXMEDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_TXDEPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N4_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N4_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N4_SUBCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N4_SEQREAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_CODBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N4_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    N4_DCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N4_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N4_QUANTPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    N4_TPSALDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N4_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N4_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    N4_CALCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SN4990'
  });
};
