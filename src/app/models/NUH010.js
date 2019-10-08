/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUH010', {
    NUH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUH_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUH_CPART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUH_AJNV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_DSPDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_EMFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_CESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUH_CESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUH_CMOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUH_FPAGTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_CBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUH_CAGENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUH_CCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUH_CIDIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUH_CIDIO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUH_CRELAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUH_CCARTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUH_CTABH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUH_SITCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_SITCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_DTEFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUH_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_DTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUH_UTEBIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_CEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUH_ENDI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUH_DIAVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUH_DIAEMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUH_CASAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_CGRPEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUH_OBSCAD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUH_OBSFAT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUH_PERFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_CLIEBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUH_NIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
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
    NUH_NIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUH_EMITNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_MOTNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUH_TPNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'NUH010'
  });
};
