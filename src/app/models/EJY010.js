/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJY010', {
    EJY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJY_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJY_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJY_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJY_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJY_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJY_DSCEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EJY_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJY_LOJIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJY_DSCIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EJY_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    EJY_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJY_TIPVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJY_NIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EJY_MOTNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJY_DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_STTSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJY_DTREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJY_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    EJY_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJY_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJY_VL_REA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJY_DTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJY_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJY_LOJEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJY_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    }
  }, {
    tableName: 'EJY010'
  });
};
