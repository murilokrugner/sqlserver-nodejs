/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SR6010', {
    R6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R6_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R6_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    R6_HRNORMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_HRDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_DIAVTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_DDIFVTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_DIAUTEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_HORMENO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_HORMAIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_REFEINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_REFEFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_ASFOLGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_NONAHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_TPEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_TPEXTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_APODFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_TPEXFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_TPEXFEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_INIHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_FIMHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_MINHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_ACRENOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_EXTNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_HNOTFAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_HNOTSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_HNOTATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_APTPMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_AUTOSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    R6_HNOTTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_HNOTTBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_HRINTER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R6_HEINTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_INTERNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    R6_REVEZAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    R6_TNOOPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R6_IDACREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_AUTOHEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_MCIMPJC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R6_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    R6_TPJORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R6_DTPJOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    R6_ABINTJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SR6010'
  });
};
