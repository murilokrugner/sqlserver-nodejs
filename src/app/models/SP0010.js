/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP0010', {
    P0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P0_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P0_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    P0_CONTROL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P0_TIPOARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_ARQUIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    P0_ONLINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_CODINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_CODFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_RELOINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_RELOFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_RELOFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_DIAINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_DIAFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_DIAFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_MESINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_MESFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_MESFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_ANOINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_ANOFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_ANOFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_HORAINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_HORAFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_HORAFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_MINUINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_MINUFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_MINUFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_FUNCINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_FUNCFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_FUNCFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_GIROINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_GIROFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_GIROFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_CCINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_CCFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P0_CCFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    P0_TIPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_ELIMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_REP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    P0_INC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P0_NOVO: {
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
    tableName: 'SP0010'
  });
};
