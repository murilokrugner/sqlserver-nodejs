/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL3010', {
    EL3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL3_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL3_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL3_SQEVCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EL3_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL3_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL3_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    EL3_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    EL3_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EL3_NIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EL3_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    EL3_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EL3_IDLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL3_ARQENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EL3_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EL3_MOTNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL3_TIPVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL3_TPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'EL3010'
  });
};
