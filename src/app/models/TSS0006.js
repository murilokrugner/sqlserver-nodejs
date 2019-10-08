/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSS0006', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID_FILE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ARQUIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DIRETORIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CONTEUDO: {
      type: "VARBINARY",
      allowNull: true
    },
    DT_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'TSS0006'
  });
};
