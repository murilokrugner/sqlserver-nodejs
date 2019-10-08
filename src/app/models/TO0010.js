/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TO0010', {
    TO0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TO0_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TO0_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TO0_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO0_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO0_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TO0_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TO0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TO0_GRISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO0_QTDFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TO0_OBJETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TO0_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TO0_TERMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TO0_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TO0_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TO0_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TO0_TIPREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TO0_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    TO0_MMSYP2: {
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
    TO0_TIPELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO0_FINALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO0_TIPAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TO0_APROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TO0_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TO0010'
  });
};
